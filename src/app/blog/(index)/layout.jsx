// import Link from 'next/link';

import Container from 'components/shared/container';
import Layout from 'components/shared/layout';
import Link from 'components/shared/link';

const categories = [
  {
    name: 'All posts',
    slug: 'all',
  },
  {
    name: 'Engineering',
    slug: 'engineering',
  },
  {
    name: 'Company',
    slug: 'company',
  },
  {
    name: 'Release notes',
    slug: 'release-notes',
  },
  {
    name: 'Community',
    slug: 'community',
  },
  {
    name: 'Video',
    slug: 'video',
  },
  {
    name: 'Appearances',
    slug: 'appearances',
  },
];

// eslint-disable-next-line react/prop-types
const BlogPageLayout = ({ children }) => (
  <Layout
    className="bg-gray-new-8 text-white"
    headerTheme="gray-8"
    footerTheme="black-new"
    headerWithBottomBorder
  >
    <h1 className="sr-only">Blog</h1>
    <div className="mt-32">
      <Container className="grid grid-cols-12 gap-x-10" size="lg">
        <aside className="col-span-2">
          <nav className="sticky top-32">
            <span className="h-9">Search posts...</span>
            <ul className="mt-8">
              {categories.map(({ name, slug }, index) => (
                <li className="py-1.5 first:pt-0 last:pb-0" key={index}>
                  <Link
                    className="py-[7px] text-xs font-semibold uppercase leading-none tracking-[0.02em]"
                    to={`/blog/category/${slug}`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        {children}
      </Container>
    </div>
  </Layout>
);

export default BlogPageLayout;
