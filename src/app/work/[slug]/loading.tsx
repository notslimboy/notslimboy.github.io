import { Flex, Skeleton, Column, Spinner } from "@/once-ui/components";

export default function WorkSlugLoading() {
    return (
        <Flex as="section" fillWidth maxWidth="m" direction="column" alignItems="center" gap="l">
            <Flex fillWidth justifyContent="center" paddingTop="xl">
                <Spinner />
            </Flex>

            {/* Back button + title */}
            <Flex fillWidth maxWidth="xs" gap="16" direction="column">
                <Skeleton shape="line" width="s" style={{ height: "1.25rem" }} />
                <Skeleton shape="line" width="l" style={{ height: "2rem" }} />
            </Flex>

            {/* Hero image */}
            <Skeleton shape="block" style={{ width: "100%", aspectRatio: "16 / 9" }} />

            {/* Article content */}
            <Column maxWidth="xs" fillWidth gap="m">
                <Flex gap="12" alignItems="center">
                    <Skeleton shape="circle" style={{ width: "2rem", height: "2rem" }} />
                    <Skeleton shape="line" width="s" style={{ height: "1rem" }} />
                </Flex>
                {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} shape="line" width={i % 3 === 2 ? "m" : "l"} style={{ height: "1rem" }} />
                ))}
                <Skeleton shape="block" style={{ width: "100%", aspectRatio: "16 / 9", marginTop: "1rem" }} />
                {[...Array(4)].map((_, i) => (
                    <Skeleton key={i + 10} shape="line" width={i % 2 === 1 ? "s" : "l"} style={{ height: "1rem" }} />
                ))}
            </Column>
        </Flex>
    );
}
