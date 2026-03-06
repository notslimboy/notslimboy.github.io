"use client";

import { useEffect, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { routes, protectedRoutes } from '@/app/resources';
import { Flex, Spinner, Input, Button, Heading } from '@/once-ui/components';

interface RouteGuardProps {
    children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
    const pathname = usePathname();
    const [isPasswordRequired, setIsPasswordRequired] = useState(false);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authLoading, setAuthLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    // Synchronous route check — no useEffect needed, no null state, no blank flash
    const isRouteEnabled = useMemo(() => {
        if (!pathname) return false;

        if (pathname in routes) {
            return routes[pathname as keyof typeof routes];
        }

        const dynamicRoutes = ['/blog', '/work'] as const;
        for (const route of dynamicRoutes) {
            if (pathname.startsWith(route) && routes[route]) {
                return true;
            }
        }

        return false;
    }, [pathname]);

    // Only async check: protected route auth (requires fetch)
    useEffect(() => {
        setIsPasswordRequired(false);
        setIsAuthenticated(false);

        if (isRouteEnabled && protectedRoutes[pathname as keyof typeof protectedRoutes]) {
            setIsPasswordRequired(true);
            setAuthLoading(true);

            fetch('/api/check-auth').then((response) => {
                if (response.ok) setIsAuthenticated(true);
                setAuthLoading(false);
            });
        }
    }, [pathname, isRouteEnabled]);

    const handlePasswordSubmit = async () => {
        const response = await fetch('/api/authenticate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password }),
        });

        if (response.ok) {
            setIsAuthenticated(true);
            setError(undefined);
        } else {
            setError('Incorrect password');
        }
    };

    // Route is disabled — show spinner (edge case)
    if (!isRouteEnabled) {
        return (
            <Flex fillWidth paddingY="128" justifyContent="center">
                <Spinner />
            </Flex>
        );
    }

    // Protected route — checking auth
    if (isPasswordRequired && authLoading) {
        return (
            <Flex fillWidth paddingY="128" justifyContent="center">
                <Spinner />
            </Flex>
        );
    }

    // Protected route — needs password
    if (isPasswordRequired && !isAuthenticated) {
        return (
            <Flex
                fillWidth paddingY="128" maxWidth={24} gap="24"
                justifyContent="center" direction="column" alignItems="center">
                <Heading align="center" wrap="balance">
                    This page is password protected
                </Heading>
                <Flex fillWidth gap="8" direction="column" alignItems="center">
                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        errorMessage={error}
                    />
                    <Button onClick={handlePasswordSubmit}>
                        Submit
                    </Button>
                </Flex>
            </Flex>
        );
    }

    return <>{children}</>;
};

export { RouteGuard };