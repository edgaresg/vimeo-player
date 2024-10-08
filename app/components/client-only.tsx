import { useEffect, useState } from "react"

type Props = {
	children(): React.ReactNode;
	fallback?: React.ReactNode;
};



const hydrating = true

export function ClientOnly({ children, fallback = null }: Props) {
    const [hydrated, setHydrated] = useState(() => !hydrating)

    useEffect(() => {
        setHydrated(true)
    }, [])

    return hydrated ? <>{children()}</> : <>{fallback}</>
}
