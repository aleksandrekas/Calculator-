
export const Button = ({ id, value, classname,func }) => {
    const handleClick = () => {
        if (id === "equals") {
          func();
        } else {
          func(value); 
        }
      };

    return <button id={id} onClick={handleClick} className={`default ${classname}`}>{value}</button>;
};
