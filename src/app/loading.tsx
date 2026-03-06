import { Column, Flex, Skeleton, Spinner } from "@/once-ui/components";

export default function HomeLoading() {
    return (
        <Column maxWidth="m" gap="xl" alignItems="center">
            <Flex fillWidth justifyContent="center" paddingTop="xl">
                <Spinner />
            </Flex>

            {/* Hero section skeleton */}
            <Column fillWidth paddingY="l" gap="m">
                <Column maxWidth="s" gap="m">
                    <Skeleton shape="line" width="l" style={{ height: "3rem", marginBottom: "1rem" }} />
                    <Skeleton shape="line" width="m" style={{ height: "1.5rem", marginBottom: "0.5rem" }} />
                    <Skeleton shape="line" width="s" style={{ height: "1.5rem", marginBottom: "1.5rem" }} />
                    <Skeleton shape="block" style={{ width: "8rem", height: "2.5rem" }} />
                </Column>
            </Column>

            {/* Project card skeleton */}
            <Flex fillWidth gap="m" direction="column">
                <Skeleton shape="block" style={{ width: "100%", aspectRatio: "16 / 9" }} />
                <Flex fillWidth paddingX="s" gap="l" mobileDirection="column">
                    <Flex flex={5}>
                        <Skeleton shape="line" width="l" style={{ height: "1.75rem" }} />
                    </Flex>
                    <Flex flex={7} direction="column" gap="8">
                        <Skeleton shape="line" width="m" style={{ height: "1rem" }} />
                        <Skeleton shape="line" width="l" style={{ height: "1rem" }} />
                        <Skeleton shape="line" width="s" style={{ height: "1rem" }} />
                    </Flex>
                </Flex>
            </Flex>
        </Column>
    );
}
