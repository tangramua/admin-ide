import * as React from 'react';
import { Radio } from 'antd';

import { DockerStackSelector } from './Docker';
import { MonocularStackSelector } from './Monocular';

const { Group, Button } = Radio;

export enum StackVariant {
    Docker = 'docker',
    Monocular = 'monocular',
}

export function StackSelector({ onChange, extra, styles = { toolbar: { marginBottom: '10px' } } }: any) {
    const [ type, setType ] = React.useState(StackVariant.Docker);

    const [ selected, updateSelected ] = React.useState({
        [StackVariant.Docker]: [],
        [StackVariant.Monocular]: [],
    });

    const toggle = (value) => {
        setType(value.target.value);
    };

    const setSelected = (variant) => (values: any[]) => {
        const stacks = ({ ...selected, [variant]: values });

        onChange(stacks);
        updateSelected(stacks);
    };

    return (
        <>
            <div className="d-flex flex-row" style={styles.toolbar}>
            <Group className="flex-grow-1" value={type} onChange={toggle}>
                <Button value={StackVariant.Docker}>
                    <i className="fab fa-docker" style={{ marginRight: '7px' }} />
                    <span>Docker</span>
                </Button>
                <Button value={StackVariant.Monocular}>
                    <img style={{ height: '14px', marginRight: '7px' }} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjwh%0D%0ALS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoK%0D%0APHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHht%0D%0AbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0%0D%0AcDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIw%0D%0AMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5l%0D%0AdC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3Nj%0D%0AYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNzIyLjg0NTciCiAgIGhlaWdo%0D%0AdD0iNzAxLjk2NjM3IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2%0D%0AZXJzaW9uPSIwLjQ4LjQgcjk5MzkiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxvZ28uc3ZnIgogICBp%0D%0AbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9Ii9ob21lL3Rob2NraW4vc3JjL2t1YmVybmV0ZXMvbmV3%0D%0ALnBuZyIKICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjQ2MC45NTAwMSIKICAgaW5rc2NhcGU6ZXhw%0D%0Ab3J0LXlkcGk9IjQ2MC45NTAwMSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQiIC8+CiAgPHNvZGlw%0D%0Ab2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAg%0D%0AICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5r%0D%0Ac2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAg%0D%0AIGlua3NjYXBlOnpvb209IjE2LjE5MDUwOSIKICAgICBpbmtzY2FwZTpjeD0iMjc3LjU2ODUxIgog%0D%0AICAgIGlua3NjYXBlOmN5PSIxNTcuNTQ0OTQiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9%0D%0AInB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImczMDUyIgogICAgIHNob3dncmlkPSJm%0D%0AYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE1MTkiCiAgICAgaW5rc2NhcGU6d2lu%0D%0AZG93LWhlaWdodD0iODIyIgogICAgIGlua3NjYXBlOndpbmRvdy14PSI1MSIKICAgICBpbmtzY2Fw%0D%0AZTp3aW5kb3cteT0iMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBp%0D%0AbmtzY2FwZTpzbmFwLWdsb2JhbD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjEwIgogICAg%0D%0AIGZpdC1tYXJnaW4tbGVmdD0iMTAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMTAiCiAgICAgZml0%0D%0ALW1hcmdpbi1ib3R0b209IjEwIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgog%0D%0AICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAg%0D%0AICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQog%0D%0AICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxs%0D%0ASW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRm%0D%0AOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAg%0D%0AICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5z%0D%0AZm9ybT0idHJhbnNsYXRlKC02LjMyNjA5NDIsLTE3NC43NTI0KSI+CiAgICA8ZwogICAgICAgaWQ9%0D%0AImczMDUyIj4KICAgICAgPHBhdGgKICAgICAgICAgc3R5bGU9ImZpbGw6IzMyNmNlNTtmaWxsLW9w%0D%0AYWNpdHk6MTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MDtzdHJva2UtbWl0ZXJsaW1pdDo0%0D%0AO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lIgogICAgICAgICBkPSJtIDM2%0D%0ANS4zMTI1LDE4NC44MTI1IGEgNDYuNzI0NjIxLDQ2LjM0MjI0NiAwIDAgMCAtMTcuOTA2MjUsNC41%0D%0AMzEyNSBsIC0yNDQuMzQzNzUsMTE2Ljc1IGEgNDYuNzI0NjIxLDQ2LjM0MjI0NiAwIDAgMCAtMjUu%0D%0AMjgxMjUsMzEuNDM3NSBMIDE3LjUsNTk5Ljc4MTI1IEEgNDYuNzI0NjIxLDQ2LjM0MjI0NiAwIDAg%0D%0AMCAyMy44NDM3NSw2MzUuMzEyNSA0Ni43MjQ2MjEsNDYuMzQyMjQ2IDAgMCAwIDI2LjUsNjM5IGwg%0D%0AMTY5LjEyNSwyMTAuMjgxMjUgYSA0Ni43MjQ2MjEsNDYuMzQyMjQ2IDAgMCAwIDM2LjUzMTI1LDE3%0D%0ALjQzNzUgTCA1MDMuMzc1LDg2Ni42NTYyNSBBIDQ2LjcyNDYyMSw0Ni4zNDIyNDYgMCAwIDAgNTM5%0D%0ALjkwNjI1LDg0OS4yNSBMIDcwOC45Njg3NSw2MzguOTM3NSBBIDQ2LjcyNDYyMSw0Ni4zNDIyNDYg%0D%0AMCAwIDAgNzE4LDU5OS43MTg3NSBsIC02MC4zNzUsLTI2Mi4yNSBhIDQ2LjcyNDYyMSw0Ni4zNDIy%0D%0ANDYgMCAwIDAgLTI1LjI4MTI1LC0zMS40Mzc1IGwgLTI0NC4zNzUsLTExNi42ODc1IEEgNDYuNzI0%0D%0ANjIxLDQ2LjM0MjI0NiAwIDAgMCAzNjUuMzEyNSwxODQuODEyNSB6IgogICAgICAgICBpZD0icGF0%0D%0AaDMwNTUiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAg%0D%0AIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0ibmV3LnBuZyIKICAgICAgICAgaW5rc2NhcGU6ZXhw%0D%0Ab3J0LXhkcGk9IjI1MC41NSIKICAgICAgICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjI1MC41NSIg%0D%0ALz4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIK%0D%0AICAgICAgICAgaWQ9InBhdGgzMDU5IgogICAgICAgICBkPSJtIDM2Ny43MzM2NiwyNzQuMDU5NjIg%0D%0AYyAtOC4wNzY5Niw4LjJlLTQgLTE0LjYyNTk2LDcuMjc1OTEgLTE0LjYyNSwxNi4yNSAxZS01LDAu%0D%0AMTM3NzMgMC4wMjgyLDAuMjY5MzQgMC4wMzEyLDAuNDA2MjUgLTAuMDExOSwxLjIxOTM2IC0wLjA3%0D%0AMDgsMi42ODgzNiAtMC4wMzEyLDMuNzUgMC4xOTI2Miw1LjE3NiAxLjMyMDksOS4xMzc0OSAyLDEz%0D%0ALjkwNjI1IDEuMjMwMjgsMTAuMjA2NjYgMi4yNjExNywxOC42NjczNiAxLjYyNSwyNi41MzEyNSAt%0D%0AMC42MTg2OSwyLjk2NTQgLTIuODAyODgsNS42Nzc0MSAtNC43NSw3LjU2MjUgbCAtMC4zNDM3NSw2%0D%0ALjE4NzUgYyAtOC43NzY4MiwwLjcyNzE3IC0xNy42MTIzNSwyLjA1ODc0IC0yNi40Mzc1LDQuMDYy%0D%0ANSAtMzcuOTc0NjEsOC42MjIxOCAtNzAuNjcwMDgsMjguMTgzMDcgLTk1LjU2MjUsNTQuNTkzNzUg%0D%0ALTEuNjE1MjIsLTEuMTAxOTMgLTQuNDQxMDMsLTMuMTI5MTQgLTUuMjgxMywtMy43NSAtMi42MTEx%0D%0ANywwLjM1MjYyIC01LjI1MDIxLDEuMTU4MjkgLTguNjg3NSwtMC44NDM3NSAtNi41NDQ5MSwtNC40%0D%0AMDU2MyAtMTIuNTA1ODcsLTEwLjQ4NjkzIC0xOS43MTg3NSwtMTcuODEyNSAtMy4zMDQ5OCwtMy41%0D%0AMDQxOSAtNS42OTgzMiwtNi44NDEwMSAtOS42MjUsLTEwLjIxODc1IC0wLjg5MTcyLC0wLjc2NzA3%0D%0AIC0yLjI1MjU4LC0xLjgwNDU1IC0zLjI1LC0yLjU5Mzc1IC0zLjA2OTg4LC0yLjQ0NzU3IC02LjY5%0D%0AMDcsLTMuNzI0MDIgLTEwLjE4NzUsLTMuODQzNzUgLTQuNDk1ODksLTAuMTUzOTQgLTguODIzOTQs%0D%0AMS42MDM4NSAtMTEuNjU2MjUsNS4xNTYyNSAtNS4wMzUyMSw2LjMxNTM4IC0zLjQyMzEyLDE1Ljk2%0D%0AODA1IDMuNTkzNzUsMjEuNTYyNSAwLjA3MTIsMC4wNTY3IDAuMTQ3MDIsMC4xMDA3OCAwLjIxODc1%0D%0ALDAuMTU2MjUgMC45NjQyMiwwLjc4MTYyIDIuMTQ0OTYsMS43ODMxMyAzLjAzMTI1LDIuNDM3NSA0%0D%0ALjE2Njg3LDMuMDc2NTUgNy45NzMyLDQuNjUxNDUgMTIuMTI1LDcuMDkzNzUgOC43NDcsNS40MDE4%0D%0AMSAxNS45OTgzNyw5Ljg4MDg2IDIxLjc1LDE1LjI4MTI1IDIuMjQ2MDIsMi4zOTQxNyAyLjYzODU4%0D%0ALDYuNjEyOTIgMi45Mzc1LDguNDM3NSBsIDQuNjg3NSw0LjE4NzUgYyAtMjUuMDkzNDIsMzcuNzYz%0D%0ANjggLTM2LjcwNjg2LDg0LjQwOTQ2IC0yOS44NDM3LDEzMS45Mzc1IGwgLTYuMTI1LDEuNzgxMjUg%0D%0AYyAtMS42MTQzLDIuMDg0NjEgLTMuODk1NDEsNS4zNjQ3NCAtNi4yODEzLDYuMzQzNzUgLTcuNTI1%0D%0AMTMsMi4zNzAyMSAtMTUuOTk0MjQsMy4yNDA1OSAtMjYuMjE4NzUsNC4zMTI1IC00LjgwMDMxLDAu%0D%0AMzk5MTUgLTguOTQyMTgsMC4xNjA5NSAtMTQuMDMxMjUsMS4xMjUgLTEuMTIwMDgsMC4yMTIxOCAt%0D%0AMi42ODA3MiwwLjYxODc3IC0zLjkwNjI1LDAuOTA2MjUgLTAuMDQyNiwwLjAwOSAtMC4wODI0LDAu%0D%0AMDIxNiAtMC4xMjUsMC4wMzEyIC0wLjA2NjgsMC4wMTU1IC0wLjE1NDU2LDAuMDQ3OSAtMC4yMTg3%0D%0ANSwwLjA2MjUgLTguNjIwMTQsMi4wODI3OSAtMTQuMTU3NzQsMTAuMDA2IC0xMi4zNzUsMTcuODEy%0D%0ANSAxLjc4MzE2LDcuODA4MzMgMTAuMjAzMTQsMTIuNTU2NzcgMTguODc1LDEwLjY4NzUgMC4wNjI2%0D%0ALC0wLjAxNDMgMC4xNTM1LC0wLjAxNjcgMC4yMTg3NSwtMC4wMzEyIDAuMDk3OSwtMC4wMjI0IDAu%0D%0AMTg0MDksLTAuMDY5OSAwLjI4MTI1LC0wLjA5MzcgMS4yMDg4NSwtMC4yNjUzNiAyLjcyMzc3LC0w%0D%0ALjU2MDYgMy43ODEyNSwtMC44NDM3NSA1LjAwMzM0LC0xLjMzOTYzIDguNjI2OTQsLTMuMzA3OTYg%0D%0AMTMuMTI1LC01LjAzMTI1IDkuNjc2OTQsLTMuNDcwNzcgMTcuNjkxNzMsLTYuMzcwMjIgMjUuNSwt%0D%0ANy41IDMuMjYxMTgsLTAuMjU1NDIgNi42OTcxMSwyLjAxMjE2IDguNDA2MjUsMi45Njg3NSBsIDYu%0D%0AMzc1LC0xLjA5Mzc1IGMgMTQuNjcwMTgsNDUuNDgyODIgNDUuNDE0MTYsODIuMjQ1MDIgODQuMzQz%0D%0ANzUsMTA1LjMxMjUgbCAtMi42NTYyNSw2LjM3NSBjIDAuOTU3NDIsMi40NzU0MiAyLjAxMzQxLDUu%0D%0AODI0NyAxLjMwMDIyLDguMjY5MzIgLTIuODM4NjgsNy4zNjEyIC03LjcwMDk3LDE1LjEzMDk3IC0x%0D%0AMy4yMzc3MiwyMy43OTMxOCAtMi42ODA4NSw0LjAwMTkyIC01LjQyNDUzLDcuMTA3NjEgLTcuODQz%0D%0ANzUsMTEuNjg3NSAtMC41Nzg5LDEuMDk1ODkgLTEuMzE2MTgsMi43NzkzMiAtMS44NzUsMy45Mzc1%0D%0AIC0zLjc1ODg0LDguMDQyMzYgLTEuMDAxNjQsMTcuMzA1MiA2LjIxODc1LDIwLjc4MTI1IDcuMjY1%0D%0ANzUsMy40OTc4OCAxNi4yODQ0NywtMC4xOTEzNCAyMC4xODc1LC04LjI1IDAuMDA2LC0wLjAxMTQg%0D%0AMC4wMjU3LC0wLjAxOTggMC4wMzEyLC0wLjAzMTIgMC4wMDQsLTAuMDA5IC0wLjAwNCwtMC4wMjI1%0D%0AIDAsLTAuMDMxMiAwLjU1NTkzLC0xLjE0MjU1IDEuMzQzNTMsLTIuNjQ0MzcgMS44MTI1LC0zLjcx%0D%0AODc1IDIuMDcyMTMsLTQuNzQ3MDIgMi43NjE2MSwtOC44MTUwNiA0LjIxODc1LC0xMy40MDYyNSAz%0D%0ALjg2OTYyLC05LjcyMDE0IDUuOTk1NjcsLTE5LjkxOTAzIDExLjMyMjU4LC0yNi4yNzQxMSAxLjQ1%0D%0AODY4LC0xLjc0MDIzIDMuODM2ODEsLTIuNDA5NSA2LjMwMjQyLC0zLjA2OTY0IGwgMy4zMTI1LC02%0D%0AIGMgMzMuOTM4MjQsMTMuMDI2OCA3MS45MjY2NiwxNi41MjI0NiAxMDkuODc1LDcuOTA2MjUgOC42%0D%0ANTY5NywtMS45NjU1NyAxNy4wMTQ0NCwtNC41MDk0NSAyNS4wOTM3NSwtNy41NjI1IDAuOTMwOTgs%0D%0AMS42NTEzMyAyLjY2MTEzLDQuODI1NyAzLjEyNSw1LjYyNSAyLjUwNTU5LDAuODE1MTggNS4yNDA0%0D%0ANCwxLjIzNjE0IDcuNDY4NzUsNC41MzEyNSAzLjk4NTM5LDYuODA4OTggNi43MTA5LDE0Ljg2NDE2%0D%0AIDEwLjAzMTI1LDI0LjU5Mzc1IDEuNDU3MzgsNC41OTExMSAyLjE3NzYyLDguNjU5MzMgNC4yNSwx%0D%0AMy40MDYyNSAwLjQ3MjM0LDEuMDgxOTUgMS4yNTYsMi42MDQ4NiAxLjgxMjUsMy43NSAzLjg5NDgy%0D%0ALDguMDg0ODQgMTIuOTQyMTIsMTEuNzg2NjcgMjAuMjE4NzUsOC4yODEyNSA3LjIxOTUsLTMuNDc3%0D%0AOSA5Ljk3OTc0LC0xMi43Mzk5IDYuMjE4NzUsLTIwLjc4MTI1IC0wLjU1ODg5LC0xLjE1ODE0IC0x%0D%0ALjMyNzMsLTIuODQxNjQgLTEuOTA2MjUsLTMuOTM3NSAtMi40MTk0NiwtNC41Nzk3NiAtNS4xNjI3%0D%0ALC03LjY1NDQ4IC03Ljg0Mzc1LC0xMS42NTYyNSAtNS41MzcyMSwtOC42NjE5MiAtMTAuMTI5Njgs%0D%0ALTE1Ljg1NzcgLTEyLjk2ODc1LC0yMy4yMTg3NSAtMS4xODcxMSwtMy43OTY1NyAwLjIwMDI4LC02%0D%0ALjE1Nzc0IDEuMTI1LC04LjYyNSAtMC41NTM3OCwtMC42MzQ3NyAtMS43Mzg4MSwtNC4yMjAwOSAt%0D%0AMi40Mzc1LC01LjkwNjI1IDQwLjQ1NzQsLTIzLjg4ODE2IDcwLjI5ODU2LC02Mi4wMjEyOSA4NC4z%0D%0AMTI1LC0xMDYuMDYyNSAxLjg5MjQsMC4yOTc0MiA1LjE4MTU0LDAuODc5MzYgNi4yNSwxLjA5Mzc1%0D%0AIDIuMTk5NTQsLTEuNDUwNyA0LjIyMTk0LC0zLjM0MzUyIDguMTg3NSwtMy4wMzEyNSA3LjgwODMy%0D%0ALDEuMTI5MzcgMTUuODIyODgsNC4wMjk3MyAyNS41LDcuNSA0LjQ5ODE1LDEuNzIzMDYgOC4xMjE2%0D%0ALDMuNzIzMTMgMTMuMTI1LDUuMDYyNSAxLjA1NzQ5LDAuMjgzMDkgMi41NzIzOCwwLjU0NzIgMy43%0D%0AODEyNSwwLjgxMjUgMC4wOTcyLDAuMDIzOCAwLjE4MzMsMC4wNzE0IDAuMjgxMjUsMC4wOTM3IDAu%0D%0AMDY1MywwLjAxNDYgMC4xNTYxNSwwLjAxNjkgMC4yMTg3NSwwLjAzMTIgOC42NzIzNiwxLjg2Njk1%0D%0AIDE3LjA5Mzg0LC0yLjg3ODcxIDE4Ljg3NSwtMTAuNjg3NSAxLjc4MDc0LC03LjgwNjk2IC0zLjc1%0D%0ANDMsLTE1LjczMjAxIC0xMi4zNzUsLTE3LjgxMjUgLTEuMjUzOTMsLTAuMjg1MTMgLTMuMDMyMjUs%0D%0ALTAuNzY5MzggLTQuMjUsLTEgLTUuMDg5MTIsLTAuOTYzNzggLTkuMjMwOTIsLTAuNzI2MSAtMTQu%0D%0AMDMxMjUsLTEuMTI1IC0xMC4yMjQ1NiwtMS4wNzEzOCAtMTguNjkzNSwtMS45NDI2OSAtMjYuMjE4%0D%0ANzUsLTQuMzEyNSAtMy4wNjgyNiwtMS4xOTAyOCAtNS4yNTEwMywtNC44NDEyNCAtNi4zMTI1NSwt%0D%0ANi4zNDM3NSBsIC01LjkwNjI1LC0xLjcxODc1IGMgMy4wNjIyNiwtMjIuMTU0NDIgMi4yMzY1NSwt%0D%0ANDUuMjExMzQgLTMuMDYyNSwtNjguMjgxMjUgLTUuMzQ4MzksLTIzLjI4NDcxIC0xNC44MDAzNywt%0D%0ANDQuNTgwODQgLTI3LjQwNjI1LC02My4zNDM3NSAxLjUxNTA1LC0xLjM3NzI5IDQuMzc2MTksLTMu%0D%0AOTEwOTEgNS4xODc1LC00LjY1NjI1IDAuMjM3MTYsLTIuNjI0MTcgMC4wMzM0LC01LjM3NTUzIDIu%0D%0ANzUsLTguMjgxMjUgNS43NTEzNCwtNS40MDA2OSAxMy4wMDMyOSwtOS44Nzg5OCAyMS43NSwtMTUu%0D%0AMjgxMjUgNC4xNTE2NywtMi40NDI1MiA3Ljk4OTU0LC00LjAxNjk4IDEyLjE1NjI1LC03LjA5Mzc1%0D%0AIDAuOTQyMjUsLTAuNjk1NzYgMi4yMjg5LC0xLjc5NzU5IDMuMjE4NzUsLTIuNTkzNzUgNy4wMTUz%0D%0AOCwtNS41OTYzMyA4LjYzMDU4LC0xNS4yNDg0MiAzLjU5Mzc1LC0yMS41NjI1IC01LjAzNjgzLC02%0D%0ALjMxNDA4IC0xNC43OTcxMiwtNi45MDg4MyAtMjEuODEyNSwtMS4zMTI1IC0wLjk5ODU2LDAuNzkw%0D%0AODUgLTIuMzUzNTMsMS44MjI1MiAtMy4yNSwyLjU5Mzc1IC0zLjkyNjUsMy4zNzc5NiAtNi4zNTE0%0D%0ANSw2LjcxNDM5IC05LjY1NjI1LDEwLjIxODc1IC03LjIxMjQ5LDcuMzI1OTUgLTEzLjE3NDA3LDEz%0D%0ALjQzNzc3IC0xOS43MTg3NSwxNy44NDM3NSAtMi44MzYwMSwxLjY1MTA2IC02Ljk4OTk2LDEuMDc5%0D%0ANzggLTguODc1MDUsMC45Njg3NSBsIC01LjU2MjUsMy45Njg3NSBjIC0zMS43MTg4LC0zMy4yNjA1%0D%0ANyAtNzQuOTA0NjYsLTU0LjUyNTQ2IC0xMjEuNDA2MDUsLTU4LjY1NjMgLTAuMTMwMDYsLTEuOTQ4%0D%0ANzIgLTAuMzAwNDUsLTUuNDcxMTcgLTAuMzQzNzUsLTYuNTMxMjUgLTEuOTAzNzEsLTEuODIxNjUg%0D%0ALTQuMjAzNDIsLTMuMzc2ODYgLTQuNzgxMjUsLTcuMzEyNSAtMC42MzYxNywtNy44NjM4OSAwLjQy%0D%0ANTk3LC0xNi4zMjQ1OSAxLjY1NjI1LC0yNi41MzEyNSAwLjY3OTEsLTQuNzY4NzYgMS44MDczOCwt%0D%0AOC43MzAyNSAyLC0xMy45MDYyNSAwLjA0MzgsLTEuMTc2NjMgLTAuMDI2NSwtMi44ODQwMSAtMC4w%0D%0AMzEyLC00LjE1NjI1IC05LjZlLTQsLTguOTc0MDkgLTYuNTQ4MDQsLTE2LjI1MDgyIC0xNC42MjUs%0D%0ALTE2LjI1IHogbSAtMTguMzEyNSwxMTMuNDM3NSAtNC4zNDM3NSw3Ni43MTg3NSAtMC4zMTI1LDAu%0D%0AMTU2MjUgYyAtMC4yOTEzNCw2Ljg2MzM1IC01LjkzOTk2LDEyLjM0Mzc1IC0xMi44NzUsMTIuMzQz%0D%0ANzUgLTIuODQwODEsMCAtNS40NjI5NCwtMC45MTIyOSAtNy41OTM3NSwtMi40Njg3NSBsIC0wLjEy%0D%0ANSwwLjA2MjUgLTYyLjkwNjI1LC00NC41OTM3NSBjIDE5LjMzMzY1LC0xOS4wMTExNSA0NC4wNjI5%0D%0AMSwtMzMuMDYwMzkgNzIuNTYyNSwtMzkuNTMxMjUgNS4yMDU5OSwtMS4xODIwMyAxMC40MDk2Niwt%0D%0AMi4wNTkxIDE1LjU5Mzc1LC0yLjY4NzUgeiBtIDM2LjY1NjI1LDAgYyAzMy4yNzM0Nyw0LjA5MjMy%0D%0AIDY0LjA0NTAxLDE5LjE1ODgyIDg3LjYyNSw0Mi4yNSBsIC02Mi41LDQ0LjMxMjUgLTAuMjE4NzUs%0D%0ALTAuMDkzNyBjIC01LjU0NzQ1LDQuMDUxNjkgLTEzLjM2MzQzLDMuMDQ2MzkgLTE3LjY4NzUsLTIu%0D%0AMzc1IC0xLjc3MTMyLC0yLjIyMDk2IC0yLjcwMDcyLC00LjgzMjM5IC0yLjgxMjUsLTcuNDY4NzUg%0D%0AbCAtMC4wNjI1LC0wLjAzMTIgeiBtIC0xNDcuNjI1LDcwLjg3NSA1Ny40Mzc1LDUxLjM3NSAtMC4w%0D%0ANjI1LDAuMzEyNSBjIDUuMTg0MzcsNC41MDY5NyA1Ljk0ODg4LDEyLjMyNzk0IDEuNjI1LDE3Ljc1%0D%0AIC0xLjc3MTIsMi4yMjEwNSAtNC4xNDIwOCwzLjcxMDc0IC02LjY4NzUsNC40MDYyNSBsIC0wLjA2%0D%0AMjUsMC4yNSAtNzMuNjI1LDIxLjI1IGMgLTMuNzQ3MjgsLTM0LjI2NTE3IDQuMzI4NTUsLTY3LjU3%0D%0AMzY0IDIxLjM3NSwtOTUuMzQzNzUgeiBtIDI1OC4xNTYyNSwwLjAzMTIgYyA4LjUzNDEsMTMuODMy%0D%0ANTYgMTQuOTk2NTUsMjkuMjgyMTQgMTguODQzNzUsNDYuMDMxMjUgMy44MDEwNiwxNi41NDgyOCA0%0D%0ALjc1NDk5LDMzLjA2Njk3IDMuMTg3NSw0OS4wMzEyNSBsIC03NCwtMjEuMzEyNSAtMC4wNjI1LC0w%0D%0ALjMxMjUgYyAtNi42MjY1LC0xLjgxMTA0IC0xMC42OTg5MywtOC41NTE2MiAtOS4xNTYyNSwtMTUu%0D%0AMzEyNSAwLjYzMjAzLC0yLjc2OTYyIDIuMTAyMjIsLTUuMTEyNjQgNC4wOTM3NSwtNi44NDM3NSBs%0D%0AIC0wLjAzMTIsLTAuMTU2MjUgNTcuMTI1LC01MS4xMjUgeiBtIC0xNDAuNjU2MjUsNTUuMzEyNSAy%0D%0AMy41MzEyNSwwIDE0LjYyNSwxOC4yODEyNSAtNS4yNSwyMi44MTI1IC0yMS4xMjUsMTAuMTU2MjUg%0D%0ALTIxLjE4NzUsLTEwLjE4NzUgLTUuMjUsLTIyLjgxMjUgeiBtIDc1LjQzNzUsNjIuNTYyNSBjIDAu%0D%0AOTk5OTcsLTAuMDUwNSAxLjk5NTU4LDAuMDM5NiAyLjk2ODc1LDAuMjE4NzUgbCAwLjEyNSwtMC4x%0D%0ANTYyNSA3Ni4xNTYyNSwxMi44NzUgYyAtMTEuMTQ1NSwzMS4zMTMxIC0zMi40NzI4MSw1OC40NDAx%0D%0AOCAtNjAuOTY4NzUsNzYuNTkzNzUgbCAtMjkuNTYyNSwtNzEuNDA2MjUgMC4wOTM3LC0wLjEyNSBj%0D%0AIC0yLjcxNTYxLC02LjMwOTk5IDAuMDAyLC0xMy43MDk1NiA2LjI1LC0xNi43MTg3NSAxLjU5OTY1%0D%0ALC0wLjc3MDQxIDMuMjcwODksLTEuMTk3MDEgNC45Mzc1LC0xLjI4MTI1IHogbSAtMTI3LjkwNjI1%0D%0ALDAuMzEyNSBjIDUuODExNzQsMC4wODE1IDExLjAyNDYyLDQuMTE1MjUgMTIuMzc1LDEwLjAzMTI1%0D%0AIDAuNjMyMTksMi43Njk1OCAwLjMyNDUsNS41MTM3NSAtMC43MTg3NSw3LjkzNzUgbCAwLjIxODc1%0D%0ALDAuMjgxMjUgLTI5LjI1LDcwLjY4NzUgYyAtMjcuMzQ3MTYsLTE3LjU0ODYgLTQ5LjEyOTI3LC00%0D%0AMy44MjQwMyAtNjAuNzgxMjUsLTc2LjA2MjQ1IGwgNzUuNSwtMTIuODEyNSAwLjEyNSwwLjE1NjI1%0D%0AIGMgMC44NDQ1MSwtMC4xNTU0MSAxLjcwMSwtMC4yMzA0IDIuNTMxMjUsLTAuMjE4NzUgeiBtIDYz%0D%0ALjc4MTI1LDMwLjk2ODggYyAyLjAyNDQ1LC0wLjA3NDQgNC4wNzg2NSwwLjM0MDk4IDYuMDMxMjUs%0D%0AMS4yODEyNSAyLjU1OTUxLDEuMjMyNTMgNC41MzY3MywzLjE3MzE5IDUuNzgxMjUsNS41IGwgMC4y%0D%0AODEyNSwwIDM3LjIxODc1LDY3LjI1IGMgLTQuODMwMjksMS42MTkyMyAtOS43OTYwOSwzLjAwMzA4%0D%0AIC0xNC44NzUsNC4xNTYyNSAtMjguNDY0NTMsNi40NjI5IC01Ni44Mzg2Miw0LjUwNDY3IC04Mi41%0D%0AMzEyNSwtNC4yNSBsIDM3LjEyNSwtNjcuMTI1IDAuMDYyNSwwIGMgMi4yMjc2NywtNC4xNjQ0MSA2%0D%0ALjQ1MjQ3LC02LjY0ODg3IDEwLjkwNjI1LC02LjgxMjUgeiIKICAgICAgICAgc3R5bGU9ImZvbnQt%0D%0Ac2l6ZTptZWRpdW07Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdl%0D%0AaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246%0D%0Ac3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7bGluZS1oZWlnaHQ6bm9ybWFsO2xldHRlci1zcGFj%0D%0AaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7ZGlyZWN0%0D%0AaW9uOmx0cjtibG9jay1wcm9ncmVzc2lvbjp0Yjt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNo%0D%0Ab3I6c3RhcnQ7YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7Y29sb3I6IzAwMDAwMDtmaWxsOiNmZmZm%0D%0AZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMjU7c3Ryb2tl%0D%0ALW1pdGVybGltaXQ6NDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTttYXJr%0D%0AZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJs%0D%0AZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlO2ZvbnQtZmFtaWx5OlNhbnM7LWlua3NjYXBl%0D%0ALWZvbnQtc3BlY2lmaWNhdGlvbjpTYW5zIgogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNj%0D%0AY2NjY2Njc2NjY2NzY3NzY2NzY2NjY2NjY2NzY2Njc2NjY2NjY2NjY2NjY2Njc2NjY3Njc2Njc2Nj%0D%0AY2NzY3Njc2NjY2NjY2Njc2NjY3Njc2NjY2NzY2NjY3Njc2NzY2NjY2NjY2NjY2NjY2Njc2NjY3Nj%0D%0AY2NjY2NjY2NjY2NzY2NjY2NzY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NzY2Njc2NjY2NjY2NjY3Nj%0D%0AY2NzY2NjYyIKICAgICAgICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSIuL3BhdGgzMDU5LnBu%0D%0AZyIKICAgICAgICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjI1MC41NSIKICAgICAgICAgaW5rc2Nh%0D%0AcGU6ZXhwb3J0LXlkcGk9IjI1MC41NSIgLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="/>
                    <span>Helm Charts</span>
                </Button>
            </Group>
                {extra}
            </div>

            {type === StackVariant.Docker
                ? <DockerStackSelector selected={selected[StackVariant.Docker]} onChange={setSelected(StackVariant.Docker)} />
                : <MonocularStackSelector selected={selected[StackVariant.Monocular]} onChange={setSelected(StackVariant.Monocular)} />}
        </>
    );
}
