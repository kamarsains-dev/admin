
type Props = {
    children: React.ReactNode;
};

export default async function AuthLayout ({
    children,
}: Props) {

    return (
        <>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>
    )
}
