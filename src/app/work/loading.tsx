import { Flex, Skeleton, Column, Spinner } from "@/once-ui/components";

function ProjectCardSkeleton() {
    return (
        <Flex fillWidth gap="m" direction="column">
            <Skeleton shape="block" style={{ width: "100%", aspectRatio: "16 / 9" }} />
            <Flex fillWidth paddingX="s" paddingTop="12" paddingBottom="24" gap="l" mobileDirection="column">
                <Flex flex={5}>
                    <Skeleton shape="line" width="l" style={{ height: "1.75rem" }} />
                </Flex>
                <Flex flex={7} direction="column" gap="8">
                    <Skeleton shape="line" width="m" style={{ height: "1rem" }} />
                    <Skeleton shape="line" width="l" style={{ height: "1rem" }} />
                    <Skeleton shape="line" width="s" style={{ height: "1rem" }} />
                    <Skeleton shape="line" width="xs" style={{ height: "1rem" }} />
                </Flex>
            </Flex>
        </Flex>
    );
}

export default function WorkLoading() {
    return (
        <Column fillWidth maxWidth="m" gap="xl" paddingX="l">
            <Flex fillWidth justifyContent="center" paddingTop="xl">
                <Spinner />
            </Flex>
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
        </Column>
    );
}
