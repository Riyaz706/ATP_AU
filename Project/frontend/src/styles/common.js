// src/styles/common.js
// Theme: Basic Standard — White background, clear borders, standard blue accents

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-white min-h-screen"
export const pageWrapper    = "max-w-6xl mx-auto px-4 py-10"
export const section        = "mb-10"

// ─── Cards ────────────────────────────────────────────
export const cardClass      = "bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow duration-200 cursor-pointer"

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "text-4xl font-bold text-gray-900 mb-4"
export const headingClass   = "text-xl font-bold text-gray-800"
export const subHeadingClass= "text-lg font-medium text-gray-700"
export const bodyText       = "text-gray-600 leading-normal"
export const mutedText      = "text-sm text-gray-500"
export const linkClass      = "text-blue-600 hover:underline transition-colors"

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn     = "bg-blue-600 text-white font-medium px-4 py-2 rounded shadow-sm hover:bg-blue-700 transition-colors cursor-pointer text-sm"
export const secondaryBtn   = "bg-white border border-gray-300 text-gray-700 font-medium px-4 py-2 rounded hover:bg-gray-50 transition-colors cursor-pointer text-sm"
export const ghostBtn       = "text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer text-sm hover:underline"

// ─── Forms ────────────────────────────────────────────
export const formCard       = "bg-white border border-gray-200 rounded-lg p-8 max-w-md mx-auto shadow-sm"
export const formTitle      = "text-2xl font-bold text-gray-900 text-center mb-6"
export const labelClass     = "text-sm font-medium text-gray-700 mb-1 block"
export const inputClass     = "w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
export const formGroup      = "mb-4"
export const submitBtn      = "w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition-colors cursor-pointer mt-2 text-sm"

// ─── Navbar ───────────────────────────────────────────
export const navbarClass        = "bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-50 shadow-sm"
export const navContainerClass  = "max-w-6xl mx-auto w-full flex items-center justify-between"
export const navBrandClass      = "text-xl font-bold text-blue-600"
export const navLinksClass      = "flex items-center gap-6"
export const navLinkClass       = "text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
export const navLinkActiveClass = "text-sm text-blue-600 font-bold border-b-2 border-blue-600 pb-1"

// ─── Article / Blog ───────────────────────────────────
export const articleGrid        = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
export const articleCardClass   = "bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-400 transition-colors flex flex-col gap-3 cursor-pointer h-full shadow-sm"
export const articleTitle       = "text-lg font-bold text-gray-900 line-clamp-2"
export const articleExcerpt     = "text-sm text-gray-600 line-clamp-3 mb-auto"
export const articleMeta        = "text-xs text-gray-500 mt-2"
export const articleBody        = "text-gray-700 leading-relaxed text-base max-w-3xl"
export const timestampClass     = "text-xs text-gray-400 flex items-center gap-1"
export const tagClass           = "text-[10px] font-bold text-blue-600 border border-blue-600 rounded px-1.5 py-0.5 uppercase tracking-wide w-fit"

// ─── Feedback ─────────────────────────────────────────
export const errorClass         = "bg-red-50 text-red-700 border border-red-200 rounded px-4 py-3 text-sm"
export const successClass       = "bg-green-50 text-green-700 border border-green-200 rounded px-4 py-3 text-sm"
export const loadingClass       = "text-blue-600 text-sm animate-pulse text-center py-20"
export const emptyStateClass    = "text-center text-gray-500 py-20 text-sm"

// ─── Divider ──────────────────────────────────────────
export const divider            = "border-t border-gray-200 my-8"
