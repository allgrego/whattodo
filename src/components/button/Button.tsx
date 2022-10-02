import { FC } from "react";
import { ButtonProps } from "./button.types";
import { getTypeStyles } from "./buttonFunctions";
import LoadingButton from "./LoadingButton";

const Button: FC<ButtonProps> = ({ type = "primary", children, className = "", loading = false, ...rest }) => {

    const typeStyles = getTypeStyles(type)

    return (
        <>
            {
                loading ?
                    (
                        <LoadingButton
                            className={className}
                            type={type}
                        />
                    ) :
                    (
                        <button className={`${typeStyles} font-bold py-2 px-4 rounded-lg ${className}`}
                            {...rest}
                        >
                            {children}
                        </button >
                    )
            }
        </>
    );
}

export default Button;