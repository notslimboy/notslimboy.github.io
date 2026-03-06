import { Flex, Skeleton, Spinner } from "@/once-ui/components";

export default function GalleryLoading() {
    // Match MasonryGrid breakpoints: default=4, 1440=3, 1024=2, 560=1
    const items = [
        { ratio: "16 / 9" }, { ratio: "9 / 16" }, { ratio: "16 / 9" }, { ratio: "9 / 16" },
        { ratio: "9 / 16" }, { ratio: "16 / 9" }, { ratio: "16 / 9" }, { ratio: "9 / 16" },
        { ratio: "16 / 9" }, { ratio: "9 / 16" }, { ratio: "16 / 9" }, { ratio: "9 / 16" },
    ];

    return (
        <Flex fillWidth direction="column" gap="l">
            <Flex fillWidth justifyContent="center" paddingTop="l">
                <Spinner />
            </Flex>
            <Flex fillWidth overflow="hidden">
                <div
                    style={{
                        display: "grid",
                        gap: "var(--static-space-8)",
                        width: "100%",
                        alignItems: "start",
                        // Responsive columns matching MasonryGrid breakpoints
                        gridTemplateColumns: "repeat(1, 1fr)",
                    }}
                    className="gallery-skeleton-grid"
                >
                    {items.map((item, i) => (
                        <Skeleton
                            key={i}
                            shape="block"
                            style={{ width: "100%", aspectRatio: item.ratio }}
                        />
                    ))}
                </div>
            </Flex>
            <style>{`
                @media (min-width: 560px) {
                    .gallery-skeleton-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (min-width: 1024px) {
                    .gallery-skeleton-grid { grid-template-columns: repeat(3, 1fr) !important; }
                }
                @media (min-width: 1440px) {
                    .gallery-skeleton-grid { grid-template-columns: repeat(4, 1fr) !important; }
                }
            `}</style>
        </Flex>
    );
}
