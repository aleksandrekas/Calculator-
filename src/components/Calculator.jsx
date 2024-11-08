export  const Calculator = ({children,equation})=>{
    return <>
        <div className="calculator">
            <div id="display">
                <div id="upper">{equation.upper}</div>
                <div id="lower">{equation.lower}</div>
            </div>

            <div id="button-area">
                {children}
            </div>
        </div>
    </>
}