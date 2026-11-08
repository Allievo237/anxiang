@echo off
title demo1 - local server
cd /d "%~dp0"
echo Starting demo1 local server...
echo.

python --version >nul 2>nul
if not errorlevel 1 (
  python "%~dp0serve.py"
  if not errorlevel 1 goto END
  echo Python did not start correctly. Trying another runtime...
  echo.
)

py -3 --version >nul 2>nul
if not errorlevel 1 (
  py -3 "%~dp0serve.py"
  if not errorlevel 1 goto END
)

node --version >nul 2>nul
if not errorlevel 1 (
  node "%~dp0serve.js"
  if not errorlevel 1 goto END
)

echo.
echo Could not start the server.
echo Python or Node.js is required. Install Python from:
echo   https://www.python.org/downloads/
echo Then double-click this file again.
echo.
pause

:END
