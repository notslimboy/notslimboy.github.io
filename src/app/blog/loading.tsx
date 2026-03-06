import { Flex, Skeleton, Column, Grid, Spinner } from "@/once-ui/components";

function PostCardSkeleton({ thumbnail = false }: { thumbnail?: boolean }) {
    return (
        <Flex direction="column" gap="m" fillWidth>
            {thumbnail && (
                <Skeleton shape="block" style={{ width: "100%", aspectRatio: "16 / 9" }} />
            )}
            <Flex direction="column" gap="8">
                <Skeleton shape="line" width="l" style={{ height: "1.25rem" }} />
                <Skeleton shape="line" width="m" style={{ height: "1rem" }} />
                <Skeleton shape="line" width="s" style={{ height: "0.875rem" }} />
            </Flex>
        </Flex>
    );
}

export default function BlogLoading() {
    return (
        <Column maxWidth="s">
            <Flex fillWidth justifyContent="center" paddingTop="xl" paddingBottom="l">
                <Spinner />
            </Flex>
            <Skeleton shape="line" width="m" style={{ height: "2.5rem", marginBottom: "2rem" }} />
            <Column fillWidth flex={1}>
                <Grid columns="1" fillWidth marginBottom="40" gap="m">
                    <PostCardSkeleton thumbnail />
                    <PostCardSkeleton thumbnail />
                    <PostCardSkeleton thumbnail />
                </Grid>
                <Grid columns="2" mobileColumns="1" fillWidth marginBottom="40" gap="m">
                    <PostCardSkeleton />
                    <PostCardSkeleton />
                </Grid>
            </Column>
        </Column>
    );
}
