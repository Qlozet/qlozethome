// Where the live apps are. Override with NEXT_PUBLIC_SHOP_URL /
// NEXT_PUBLIC_VENDOR_URL (e.g. for a preview deployment).
export const SHOP_URL =
  process.env.NEXT_PUBLIC_SHOP_URL ?? "https://shop.qlozet.app";

export const VENDOR_URL =
  process.env.NEXT_PUBLIC_VENDOR_URL ?? "https://vendor.qlozet.app";

// Support tickets go straight to the team and the customer can follow them
// in their account.
export const HELP_URL = `${SHOP_URL}/help/contact`;
