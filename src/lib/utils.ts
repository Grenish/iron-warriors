import { createCn } from "cn/config"

// Teach the class merger about the Sleeve type scale so that, for example,
// "text-body text-white" keeps both the size and the color instead of
// treating them as conflicting utilities.
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "caption",
            "body-sm",
            "body",
            "subheading",
            "heading-sm",
            "heading",
            "heading-lg",
            "display",
          ],
        },
      ],
      shadow: [{ shadow: ["subtle", "subtle-2", "subtle-3", "subtle-4"] }],
    },
  },
})
