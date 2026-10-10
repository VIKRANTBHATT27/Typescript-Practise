import { Activity, type PropsWithChildren, type ReactNode } from 'react';

interface CardProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode;
    className?: string;
}

export const Card = ({ title, children, footer, className }: CardProps) => {
    return (
        <section className={className}>
            <h2>{title}</h2>
            <div>{children}</div>
            <Activity mode={footer ? 'visible' : 'hidden'}>
                <footer>{footer}</footer>
            </Activity>
        </section>
    )
}