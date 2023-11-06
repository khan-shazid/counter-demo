import { ReactNode, memo } from 'react';
import buttonStyle from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    category?: string;
}

function Button({ children, category, ...restProps }: ButtonProps) {
    return (
        <button
            data-testid="base-button"
            className={`${buttonStyle['btn-base']} ${buttonStyle[category]}`}
            {...restProps}
        >
            {children}
        </button>
    );
}

const ButtonComp = memo(Button);

export default ButtonComp;
