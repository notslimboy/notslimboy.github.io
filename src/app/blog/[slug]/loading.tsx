import { Flex, Skeleton, Column, Spinner } from "@/once-ui/components";

export default function BlogSlugLoading() {
    return (
        <Column maxWidth="xs" fillWidth gap="m">
            <Flex fillWidth justifyContent="center" paddingTop="xl">
                <Spinner />
            </Flex>

            {/* Back + title */}
            <Flex direction="column" gap="12" marginBottom="l">
                <Skeleton shape="line" width="s" style={{ height: "1.25rem" }} />
                <Skeleton shape="line" width="l" style={{ height: "2.25rem" }} />
                <Skeleton shape="line" width="m" style={{ height: "1.5rem" }} />
            </Flex>

            {/* Author + date */}
            <Flex gap="12" alignItems="center" marginBottom="xl">
                <Skeleton shape="circle" style={{ width: "2rem", height: "2rem" }} />
                <Skeleton shape="line" width="s" style={{ height: "1rem" }} />
            </Flex>

            {[...Array(8)].map((_, i) => (
                <Skeleton key={i} shape="line" width={i % 4 === 3 ? "m" : "l"} style={{ height: "1rem" }} />
            ))}
            <Skeleton shape="block" style={{ width: "100%", aspectRatio: "16 / 9", margin: "1rem 0" }} />
            {[...Array(5)].map((_, i) => (
                <Skeleton key={i + 20} shape="line" width={i % 3 === 2 ? "s" : "l"} style={{ height: "1rem" }} />
            ))}
        </Column>
    );
}
