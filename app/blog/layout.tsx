import type { Metadata } from 'next';
import ArticleSchemaInjector from '../components/ArticleSchemaInjector';

export const metadata: Metadata = {
    title: 'Blog – Tips, News & Insights',
    description: 'Read the Daily Number Match blog for game tips, guides, and the latest updates from our community.',
    keywords: ['Daily Number Match blog', 'game tips', 'game guides', 'game articles'],
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ArticleSchemaInjector />
            {children}
        </>
    );
}
