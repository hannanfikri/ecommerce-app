import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export const Header = () => {
  const { t } = useTranslation("header");
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper function to check if current path matches navigation item
  const isActiveRoute = (href: string) => {
    return location.pathname === href || 
           (href !== "/categories" && location.pathname.startsWith(href));
  };

  // Shared navigation items
  const navigationItems = [
    { key: "allCategories", href: "/categories", isBold: true },
    { key: "electronics", href: "/categories/electronics" },
    { key: "fashion", href: "/categories/fashion" },
    { key: "homeGarden", href: "/categories/home-garden" },
    { key: "sports", href: "/categories/sports" },
    { key: "books", href: "/categories/books" },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b">
          <div>
            <span>{t("freeShipping")}</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/help" className="hover:text-blue-600">
                {t("help")}
              </Link>
              <Link to="/account" className="hover:text-blue-600">
                {t("myAccount")}
              </Link>
              <span>{t("phone")}</span>
              <LanguageSwitcher />
            </div>

            {/* Mobile Dropdown - Only visible on mobile */}
            <div className="md:hidden">
              <DropdownMenu
                open={isDropdownOpen}
                onOpenChange={setIsDropdownOpen}
              >
                <DropdownMenuTrigger asChild>
                  <button className="p-2 rounded-full shadow-2xl focus-visible:outline-none focus-visible:ring-0 hover:cursor-pointer">
                    <HamburgerMenuIcon className="size-4" color="gray" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuPortal>
                  <DropdownMenuContent
                    className="min-w-[180px] max-w-[calc(100vw-2rem)] w-auto rounded-md bg-white p-2 shadow-lg border border-gray-200"
                    sideOffset={5}
                    align="end"
                  >
                    {/* Navigation Items */}
                    {navigationItems.map((item) => (
                      <DropdownMenuItem key={item.key} asChild>
                        <Link
                          to={item.href}
                          className={`block px-3 py-2 text-sm hover:bg-gray-50 rounded ${
                            item.isBold ? "font-medium" : ""
                          } ${
                            isActiveRoute(item.href)
                              ? "font-bold text-blue-600 bg-blue-50"
                              : ""
                          }`}
                        >
                          {t(item.key)}
                        </Link>
                      </DropdownMenuItem>
                    ))}

                    {/* Help & Account */}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <DropdownMenuItem asChild>
                        <Link
                          to="/help"
                          className="block px-3 py-2 text-sm hover:bg-gray-50 rounded"
                        >
                          {t("help")}
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem asChild>
                        <Link
                          to="/account"
                          className="block px-3 py-2 text-sm hover:bg-gray-50 rounded"
                        >
                          {t("myAccount")}
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <span className="block px-3 py-2 text-sm">
                          {t("phone")}
                        </span>
                      </DropdownMenuItem>
                    </div>

                    {/* Sign In Button */}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <DropdownMenuItem asChild>
                        <button className="w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                          {t("signIn")}
                        </button>
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenuPortal>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            🛒 ShopEase
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600">
                🔍
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <Link
              to="/wishlist"
              className="flex items-center hover:text-blue-600"
            >
              <span className="text-xl mr-1">💝</span>
              <span className="hidden md:block">{t("wishlist")}</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center hover:text-blue-600 relative"
            >
              <span className="text-xl mr-1">🛒</span>
              <span className="hidden md:block">{t("cart")}</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <div className="hidden md:block">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                {t("signIn")}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="py-3 border-t">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`hover:text-blue-600 ${
                    item.isBold ? "font-medium" : ""
                  } ${
                    isActiveRoute(item.href)
                      ? "font-bold text-blue-600 border-b-2 border-blue-600"
                      : ""
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <span className="text-red-600 font-medium">🔥 {t("sale")}</span>
              <span className="text-green-600 font-medium">
                ✨ {t("newArrivals")}
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
