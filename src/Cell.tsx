export default function Cell({children}: { children: string | number | undefined }) {
    const isNumber = typeof children === 'number'
    const text = (children ?? '').toString().padStart(2).split('')

    // 色相、饱和度、亮度
    const color = `hsl(${Math.random() * 360}deg,80%,50%)`
    // const color = 'darkgreen'
    return (
        <svg width="100" height="100" viewBox="-0.5,-0.5,100,100" className="-mr-[1px] last:mr-0">
            <rect x1="-0.5" y1="-0.5" width="99" height="99" fill="none" stroke="darkgreen"></rect>
            <g stroke="green" strokeDasharray="2,2">
                <line x1="0" y1="50" x2="100" y2="50"></line>
                <line x1="50" y1="0" x2="50" y2="100"></line>
            </g>
            <g textAnchor="middle" fontFamily="苹方" fontSize="90" fill={color}>
                {isNumber && <>
                  <text x="25" dy="0.35em" y="50">{text[0]}</text>
                  <text x="75" dy="0.35em" y="50">{text[1]}</text>
                </>}
                {!isNumber && <text x="50" dy="0.35em" y="50">{text[1]}</text>}
            </g>
        </svg>
    )
}
