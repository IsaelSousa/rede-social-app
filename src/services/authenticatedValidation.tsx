import React, { useEffect, useMemo, useState } from 'react';
import { createAxiosInstance, validationToken } from './api';
import { useRouter } from 'next/router';
import { Unauthorization } from '@/pages/unauthorization';

type AuthenticatedValidationProps = {
    children: React.ReactNode;
}

export const AuthenticatedValidation = (props: AuthenticatedValidationProps) => {
    const [status, setStatus] = useState<boolean>();

    const router = useRouter();
    const { pathname } = router;

    const defaultRoute = "/";
    const register = "/register";

    return useMemo(() => {
        if (pathname == defaultRoute || pathname == register) {
            return props.children;
        }
        else {
            const epic = validationToken();
            epic.subscribe({
                next: (resp: any) => {
                    setStatus(resp);
                },
                complete: () => { },
                error: () => { }
            });

            if (status) {
                return props.children;
            } else {
                return <Unauthorization />
            }
        }
    }, [status, pathname]);
}