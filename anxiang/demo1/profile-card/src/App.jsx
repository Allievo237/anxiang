import { useEffect, useMemo } from 'react';
import ProfileCard from './ProfileCard.jsx';
import { RESIDENTS, DEFAULT_RESIDENT } from './residents.js';
import './elder-theme.css';
import './profile-page.css';

/* 官方 ProfileCard.jsx / ProfileCard.css 保持原样：
   本文件只负责「老人简介页」的版式与内容填充，左栏直接渲染官方组件。 */
const readResident = () => {
  try {
    const id = new URLSearchParams(window.location.search).get('id');
    return RESIDENTS[id] || DEFAULT_RESIDENT;
  } catch {
    return DEFAULT_RESIDENT;
  }
};

const Field = ({ label, value }) => (
  <div className="elder-info__field">
    <span>{label}</span>
    <b>{value}</b>
  </div>
);

const Section = ({ index, title, subtitle, children }) => (
  <section className="elder-info__section">
    <div className="elder-info__section-head">
      <span className="elder-info__index">{index}</span>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
    <div className="elder-info__body">{children}</div>
  </section>
);

const App = () => {
  const resident = useMemo(readResident, []);
  const p = resident.profile;

  // iframe 会吞掉落在它上面的滚轮事件，这里转发给父页面，保证页面仍可正常滚动。
  useEffect(() => {
    const forwardWheel = event => {
      try {
        window.parent.postMessage({ type: 'elder-card-wheel', deltaY: event.deltaY }, '*');
      } catch {
        /* iframe 被独立打开时静默降级 */
      }
    };
    window.addEventListener('wheel', forwardWheel, { passive: true });
    return () => window.removeEventListener('wheel', forwardWheel);
  }, []);

  // 卡面「联系家属」按钮通过 postMessage 回传主页，由主页既有 toast 给出反馈。
  const handleContact = () => {
    try {
      window.parent.postMessage(
        {
          type: 'elder-card-contact',
          id: resident.id,
          name: resident.name,
          contactName: resident.contactName,
          contactPhone: resident.contactPhone
        },
        '*'
      );
    } catch {
      /* iframe 被独立打开时静默降级 */
    }
  };

  return (
    <div className="elder-page">
      <header className="elder-page__head">
        <div className="elder-page__brand">
          <span className="elder-page__mark" aria-hidden="true" />
          <div>
            <span className="elder-page__kicker">RESIDENT PROFILE / 住户关怀档案</span>
            <h1>住户简介</h1>
          </div>
        </div>
        <div className="elder-page__meta">
          <span className="elder-page__badge">原型演示数据</span>
          <span className="elder-page__id">档案编号 {resident.id}</span>
        </div>
      </header>

      <div className="elder-page__body">
        <aside className="elder-page__left">
          <div className="elder-stage__card">
            <ProfileCard
              avatarUrl={resident.avatarUrl}
              miniAvatarUrl={resident.miniAvatarUrl}
              iconUrl={resident.iconUrl}
              name={resident.name}
              title={resident.title}
              handle={resident.handle}
              status={resident.status}
              statusColor={resident.statusColor}
              contactText="联系家属"
              showUserInfo
              onContactClick={handleContact}
              theme="light"
              backdropColor={resident.backdropColor}
              radius={18}
              holo={0.42}
              glare={0.32}
              enableTilt
              tiltStrength={8}
              parallax={5}
              enableMobileTilt={false}
              intro
              className="elder-profile"
            />
          </div>
        </aside>

        <main className="elder-page__right">
          <Section index="01" title="基础档案" subtitle="BASIC INFO">
            <div className="elder-info__grid">
              <Field label="姓名" value={resident.name} />
              <Field label="年龄" value={p.age} />
              <Field label="居住情况" value={p.living} />
              <Field
                label="关怀等级"
                value={<span className="elder-info__tag" style={{ backgroundColor: resident.statusColor }}>{p.careLevel}</span>}
              />
              <Field label="所属社区" value={p.community} />
              <Field label="建档" value={p.since} />
            </div>
            <div className="elder-info__address">
              <span>住址</span>
              <b>{p.address}</b>
            </div>
          </Section>

          <Section index="02" title="健康与照护" subtitle="HEALTH & CARE">
            <div className="elder-info__tags">
              {p.healthTags.map(tag => <span className="elder-info__chip" key={tag}>{tag}</span>)}
            </div>
            <div className="elder-info__rows">
              <Field label="用药提醒" value={p.medication} />
              <Field label="行动能力" value={p.mobility} />
              <Field label="饮食注意" value={p.diet} />
              <Field label="照护计划" value={p.carePlan} />
            </div>
          </Section>

          <Section index="03" title="紧急联系人" subtitle="EMERGENCY CONTACT">
            <div className="elder-info__contact-main">
              <span className="elder-info__avatar">{p.primary.name.slice(0, 1)}</span>
              <div>
                <b>{p.primary.name}</b>
                <span>{p.primary.relation} · 第一联系人</span>
              </div>
              <strong>{p.primary.phone}</strong>
            </div>
            <div className="elder-info__contact-back">
              <span>备用联系人</span>
              <b>{p.backup.name}</b>
              <strong>{p.backup.phone}</strong>
            </div>
            <p className="elder-info__note">{resident.careNote}</p>
          </Section>
        </main>
      </div>

      <footer className="elder-page__foot">
        <span>安响 · 社区关怀台账</span>
        <span>本页资料均为原型演示数据，非真实住户信息 · 卡面由 React Bits 官方 ProfileCard 驱动</span>
      </footer>
    </div>
  );
};

export default App;
