import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

import appCss from "../styles.css?url";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-glow">404</h1>
        <p className="mt-4 text-muted-foreground">Lost in the colony.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-accent px-6 py-2 text-sm font-medium text-accent-foreground">Go Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-accent px-6 py-2 text-sm font-medium text-accent-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Colony One — Engineering the Future, One Solution at a Time" },
      { name: "description", content: "Colony One is a software company building custom web, mobile, and enterprise software solutions for businesses worldwide." },
      { property: "og:title", content: "Colony One — Engineering the Future, One Solution at a Time" },
      { property: "og:description", content: "Colony One is a software company building custom web, mobile, and enterprise software solutions for businesses worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Colony One — Engineering the Future, One Solution at a Time" },
      { name: "twitter:description", content: "Colony One is a software company building custom web, mobile, and enterprise software solutions for businesses worldwide." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/669c7567-1585-4391-b2cb-35d124351ea7/id-preview-d91a06d9--db76d7ec-f131-4150-a684-fcd4d7dfccae.lovable.app-1778239748022.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/669c7567-1585-4391-b2cb-35d124351ea7/id-preview-d91a06d9--db76d7ec-f131-4150-a684-fcd4d7dfccae.lovable.app-1778239748022.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function PageTransition() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">
        <PageTransition />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
