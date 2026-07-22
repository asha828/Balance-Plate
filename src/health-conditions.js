import diabetesIcon from './Images/diabetes.png';
import glutenIcon from './Images/gluten-free.png';
import hypertensionIcon from './Images/hypertension.png';
import ibsIcon from './Images/intestine.png';

const conditions = [
    {
        id: 1,
        title: "Celiac",
        shortDescription: "An autoimmune disease where gluten damages the small intestine.",

        overview:
            "Gluten damages the small intestine, making it harder to absorb nutrients.",

        goodFoods: [
            "Rice",
            "Quinoa",
            "Potatoes",
            "Fresh Fruits",
            "Vegetables",
            "Lean Meats"
        ],

        badFoods: [
            "Bread",
            "Pasta",
            "Wheat",
            "Barley",
            "Rye"
        ],

        tags: [
            "gluten-free",
            "fiber",
            "iron"
        ],

        facts: [
            "Even small amounts of gluten can trigger symptoms.",
            "Always read ingredient labels carefully.",
            "Many naturally gluten-free foods are safe and nutritious."
        ],

        image: glutenIcon,
    },

    {
        id: 2,
        title: "Type 2 Diabetes",
        shortDescription: "A condition that affects how the body uses insulin to regulate blood sugar.",

        overview:
            "Type 2 diabetes affects insulin use. Eating fiber-rich foods and lean protein helps support healthy blood sugar.",

        goodFoods: [
            "Oatmeal",
            "Beans",
            "Leafy Greens",
            "Salmon",
            "Chicken",
            "Greek Yogurt"
        ],

        badFoods: [
            "Sugary Drinks",
            "Candy",
            "White Bread",
            "Pastries",
            "Highly Processed Snacks"
        ],

        tags: [
            "fiber",
            "protein",
            "gluten-free"
        ],

        facts: [
            "Fiber helps slow the rise in blood sugar after meals.",
            "Pairing carbohydrates with protein may improve fullness.",
            "Regular meal timing can help maintain consistent energy."
        ],

        image: diabetesIcon,
    },

    {
        id: 3,
        title: "Irritable Bowel Syndrome (IBS)",
        shortDescription: "A digestive condition that affects the large intestine.",

        overview:
            "IBS symptoms vary from person to person. Some people benefit from identifying trigger foods and eating smaller, balanced meals.",

        goodFoods: [
            "Oats",
            "Bananas",
            "Rice",
            "Carrots",
            "Spinach",
            "Plain Yogurt (if tolerated)"
        ],

        badFoods: [
            "Fried Foods",
            "Carbonated Drinks",
            "Spicy Foods",
            "Onions",
            "Garlic",
            "Artificial Sweeteners"
        ],

        tags: [
            "gut-friendly",
            "fiber"
        ],

        facts: [
            "IBS triggers are different for everyone.",
            "Keeping a food diary can help identify trigger foods.",
            "Some people benefit from a low-FODMAP diet under professional guidance."
        ],

        image: ibsIcon,
    },

    {
        id: 4,
        title: "Hypertension",
        shortDescription: "A condition where blood pressure remains consistently too high.",

        overview:
            "Hypertension is high blood pressure. Eating less sodium and more potassium helps support healthy blood pressure.",

        goodFoods: [
            "Spinach",
            "Bananas",
            "Salmon",
            "Beans",
            "Oats",
            "Low-Fat Dairy"
        ],

        badFoods: [
            "Processed Meats",
            "Fast Food",
            "Salty Snacks",
            "Canned Soups",
            "High-Sodium Frozen Meals"
        ],

        tags: [
            "low-sodium",
            "potassium"
        ],

        facts: [
            "Reducing sodium intake can help support healthy blood pressure.",
            "Potassium-rich foods help balance the effects of sodium.",
            "The DASH eating pattern is commonly recommended for people with hypertension."
        ],

        image: hypertensionIcon,
    }
];

export default conditions;