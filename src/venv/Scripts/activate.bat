@echo off

rem This file is UTF-8 encoded, so we need to update the current code page while executing it
for /f "tokens=2 delims=:." %%a in ('"%SystemRoot%\System32\chcp.com"') do (
    set _OLD_CODEPAGE=%%a
)
if defined _OLD_CODEPAGE (
    "%SystemRoot%\System32\chcp.com" 65001 > nul
)

set "VIRTUAL_ENV=C:\Desktopfiles\resume\websites\data-platform-architect-profile\src\venv"

if not defined PROMPT set PROMPT=$P$G

if defined _OLD_VIRTUAL_PROMPT set PROMPT=%_OLD_VIRTUAL_PROMPT%
if defined _OLD_VIRTUAL_PYTHONHOME set PYTHONHOME=%_OLD_VIRTUAL_PYTHONHOME%

set _OLD_VIRTUAL_PROMPT=%PROMPT%
set PROMPT=(venv) %PROMPT%

if defined PYTHONHOME set _OLD_VIRTUAL_PYTHONHOME=%PYTHONHOME%
set PYTHONHOME=

if defined _OLD_VIRTUAL_PATH set PATH=%_OLD_VIRTUAL_PATH%
if not defined _OLD_VIRTUAL_PATH set _OLD_VIRTUAL_PATH=%PATH%

set "PATH=%VIRTUAL_ENV%\Scripts;%PATH%"
set "VIRTUAL_ENV_PROMPT=(venv) "

:END
if defined _OLD_CODEPAGE (
    "%SystemRoot%\System32\chcp.com" %_OLD_CODEPAGE% > nul
    set _OLD_CODEPAGE=
)

@echo off
if defined _OLD_VIRTUAL_NPM_CONFIG_PREFIX (
    set "npm_config_prefix=%_OLD_VIRTUAL_NPM_CONFIG_PREFIX%"
) else if defined NODE_VIRTUAL_ENV (
    set npm_config_prefix=
)
set "NODE_VIRTUAL_ENV=C:\Desktopfiles\resume\websites\data-platform-architect-profile\src\venv"
if not defined PROMPT (
    set "PROMPT=$P$G"
)
if defined _OLD_VIRTUAL_PROMPT (
    set "PROMPT=%_OLD_VIRTUAL_PROMPT%"
)
if defined _OLD_VIRTUAL_NODE_PATH (
    set "NODE_PATH=%_OLD_VIRTUAL_NODE_PATH%"
)
set "_OLD_VIRTUAL_PROMPT=%PROMPT%"
set "PROMPT=(venv) %PROMPT%"
if defined NODE_PATH (
    set "_OLD_VIRTUAL_NODE_PATH=%NODE_PATH%"
    set NODE_PATH=
)
if defined _OLD_VIRTUAL_PATH (
    set "PATH=%_OLD_VIRTUAL_PATH%"
) else (
    set "_OLD_VIRTUAL_PATH=%PATH%"
)
set "PATH=%NODE_VIRTUAL_ENV%\Scripts;%PATH%"
rem npm.cmd runs the npm found under npm_config_prefix, which npx exports,
rem instead of its own: point it at the environment
rem https://github.com/ekalinin/nodeenv/issues/309
if defined npm_config_prefix (
    set "_OLD_VIRTUAL_NPM_CONFIG_PREFIX=%npm_config_prefix%"
)
set "npm_config_prefix=%NODE_VIRTUAL_ENV%\Scripts"
:END

