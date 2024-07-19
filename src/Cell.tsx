export default function Cell({children}: {children: string}) {

    return (
        <svg width="100" height="100" viewBox="-0.5,-0.5,100,100" className="-mr-[1px]">
            <rect x1="-0.5" y1="-0.5" width="99" height="99" fill="none" stroke="darkgreen"></rect>
            <g stroke="green" strokeDasharray="2,2">
                <line x1="0" y1="50" x2="100" y2="50" ></line>
                <line x1="50" y1="0" x2="50" y2="100"></line>
            </g>
            <text fontSize="120" dy="0.35em" y="50" fontFamily="德彪钢笔行书字库">{children}</text>
        </svg>
    )

}
