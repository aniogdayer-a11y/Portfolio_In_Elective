@echo off
cd /d "%~dp0"
title JRU IT Elective e-Portfolio — Dayer Aniog

echo.
echo  Jose Rizal University
echo  ITC C204 — Student's Class Portfolio
echo  Dayer C. Aniog  ^|  Prof. Virginia B. Loyola, MIT
echo.
echo  Starting dev server...
echo  Open: http://localhost:5173
echo.

call npx vite --host 0.0.0.0 --port 5173 --open
pause
