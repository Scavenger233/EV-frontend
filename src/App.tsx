
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Transactions from "./pages/Transactions";
import Geography from "./pages/Geography";
import Overview from "./pages/sales/Overview";
import Daily from "./pages/sales/Daily";
import Monthly from "./pages/sales/Monthly";
import Breakdown from "./pages/sales/Breakdown";
import Performance from "./pages/Performance";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/sales/overview" element={<Overview />} />
          <Route path="/sales/daily" element={<Daily />} />
          <Route path="/sales/monthly" element={<Monthly />} />
          <Route path="/sales/breakdown" element={<Breakdown />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
