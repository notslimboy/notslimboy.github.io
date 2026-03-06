import { Flex, Skeleton, Column, Spinner } from "@/once-ui/components";

export default function AboutLoading() {
    return (
        <Flex maxWidth="m" direction="column">
            <Flex fillWidth justifyContent="center" paddingTop="xl" paddingBottom="l">
                <Spinner />
            </Flex>

            <Flex fillWidth mobileDirection="column" justifyContent="center">
                {/* Avatar sidebar skeleton */}
                <Flex
                    minWidth="160"
                    paddingX="l"
                    paddingBottom="xl"
                    gap="m"
                    flex={3}
                    direction="column"
                    alignItems="center"
                >
                    <Skeleton shape="circle" style={{ width: "8rem", height: "8rem" }} />
                    <Skeleton shape="line" width="s" style={{ height: "1rem" }} />
                    <Flex wrap gap="8">
                        <Skeleton shape="block" style={{ width: "4rem", height: "1.75rem" }} />
                        <Skeleton shape="block" style={{ width: "5rem", height: "1.75rem" }} />
                    </Flex>
                </Flex>

                {/* Main content skeleton */}
                <Flex flex={9} maxWidth={40} direction="column">
                    {/* Intro */}
                    <Flex fillWidth minHeight="160" direction="column" justifyContent="center" marginBottom="32">
                        <Skeleton shape="line" width="l" style={{ height: "3rem", marginBottom: "0.5rem" }} />
                        <Skeleton shape="line" width="m" style={{ height: "1.5rem", marginBottom: "1rem" }} />
                        <Flex gap="8" wrap paddingTop="20">
                            {[...Array(4)].map((_, i) => (
                                <Skeleton key={i} shape="block" style={{ width: "5rem", height: "2rem" }} />
                            ))}
                        </Flex>
                    </Flex>

                    {/* Description */}
                    <Flex direction="column" gap="m" marginBottom="xl">
                        {[...Array(3)].map((_, i) => (
                            <Skeleton key={i} shape="line" width={i === 2 ? "m" : "l"} style={{ height: "1.1rem" }} />
                        ))}
                    </Flex>

                    {/* Work section */}
                    <Skeleton shape="line" width="s" style={{ height: "1.75rem", marginBottom: "1rem" }} />
                    <Column gap="l" marginBottom="40">
                        {[0, 1].map((i) => (
                            <Flex key={i} fillWidth direction="column" gap="8">
                                <Flex fillWidth justifyContent="space-between">
                                    <Skeleton shape="line" width="m" style={{ height: "1.25rem" }} />
                                    <Skeleton shape="line" width="xs" style={{ height: "1rem" }} />
                                </Flex>
                                <Skeleton shape="line" width="s" style={{ height: "1rem" }} />
                                {[...Array(2)].map((_, j) => (
                                    <Skeleton key={j} shape="line" width="l" style={{ height: "1rem" }} />
                                ))}
                            </Flex>
                        ))}
                    </Column>

                    {/* Skills section */}
                    <Skeleton shape="line" width="s" style={{ height: "1.75rem", marginBottom: "1rem" }} />
                    <Column gap="l">
                        {[0, 1, 2].map((i) => (
                            <Flex key={i} fillWidth direction="column" gap="4">
                                <Skeleton shape="line" width="m" style={{ height: "1.25rem" }} />
                                <Skeleton shape="line" width="l" style={{ height: "1rem" }} />
                            </Flex>
                        ))}
                    </Column>
                </Flex>
            </Flex>
        </Flex>
    );
}
