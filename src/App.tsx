import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogPostCeoFraud from "./pages/BlogPostCeoFraud";
import BlogPostCeoFraud2 from "./pages/BlogPostCeoFraud2";
import BlogPostKreditgebuehr from "./pages/BlogPostKreditgebuehr";
import UnserePartner from "./pages/UnserePartner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/unsere-partner" element={<UnserePartner />} />
          <Route path="/blog-post/krypto-betrugsopfer-bekommt-869-bitcoin-zurueck" element={<BlogPost />} />
          <Route path="/blog-post/ceo-fraud-und-ueberweisungsbetrug" element={<BlogPostCeoFraud />} />
          <Route path="/kompetenz/cybercrime" element={<BlogPostCeoFraud2 />} />
          <Route path="/blog-post/ogh-kreditgebuehr-unzulaessig" element={<BlogPostKreditgebuehr />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
