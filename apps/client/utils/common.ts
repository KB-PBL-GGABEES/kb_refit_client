export const getIcon = (
  label: string
): { background: string; emoji: string } => {
  if (label.includes("스타포인트")) {
    return { background: "bg-green-1", emoji: "💰" };
  } else if (label.includes("배지")) {
    return { background: "bg-blue-1", emoji: "🏅" };
  } else if (label.includes("탄소중립")) {
    return { background: "bg-yellow-1", emoji: "🌱" };
  } else if (label.includes("브네")) {
    return { background: "bg-yellow-1", emoji: "🍖" };
  } else if (label.includes("스타벅스")) {
    return { background: "bg-green-1", emoji: "☕️" };
  } else {
    return { background: "bg-gray-1", emoji: "⚪️" };
  }
};

export const getPeriodNumber = (period: string): number | undefined => {
  switch (period) {
    case "common.filter.1month":
      return 1;
    case "common.filter.3month":
      return 3;
    case "common.filter.6month":
      return 6;
    default:
      return undefined;
  }
};

export const getSortOrder = (sort: string): "LATEST" | "OLDEST" => {
  switch (sort) {
    case "common.filter.newest":
      return "LATEST";
    case "common.filter.past_order":
      return "OLDEST";
    default:
      return "LATEST";
  }
};

export const getRewardType = (type: string): string => {
  switch (type) {
    case "point.filter.accumulated_points":
      return "CARBONPOINT";
    case "point.filter.discount_amount":
      return "CASHBACK";
    default:
      return "ALL";
  }
};

export const getReceiptPaymentType = (
  type: string
): "APPROVED" | "CANCELED" | "ALL" => {
  switch (type) {
    case "receipt.filter.approval":
      return "APPROVED";
    case "receipt.filter.cancel":
      return "CANCELED";
    default:
      return "ALL";
  }
};

export const getReceiptFilter = (
  filter: string
): "ALL" | "PROCESSED" | "UNPROCESSED" => {
  switch (filter) {
    case "receipt.filter.receipt_processing":
      return "PROCESSED";
    case "receipt.filter.receipt_unprocessing":
      return "UNPROCESSED";
    default:
      return "ALL";
  }
};
