// This file contains the Playwright E2E tests for the frontend application.

// Note: to run the Playwright tests, .env.local file should be created under the frontend directory
// and it should contain the following variables:
// USERNAME=your_username
// PASSWORD=your_password

// cd frontend, then run the following command:
// npm run dev
// in a separate terminal, cd frontend, then npx playwright test

import { test, expect, Page } from "@playwright/test";
import { chapterInfo } from "@/textContent/chapterInfo";
import {
  chapterData,
  interactiveComponentData,
} from "@/textContent/homePageInfo";

// This function navigates to the previous page and checks if the URL is correct
async function goToPreviousPage(page: Page, pageNumber: number) {
  await page.locator('[data-testid="previousPage"]').click();
  await expect(page).toHaveURL(new RegExp(`/page${pageNumber - 1}`));
}

async function goToNextPage(page: Page, pageNumber: number) {
  await page.locator('[data-testid="nextPage"]').click();
  await expect(page).toHaveURL(new RegExp(`/page${pageNumber + 1}`));
}

async function checkHeadingVisibility(page: Page, name: string, level: number) {
  const heading = await page.getByRole("heading", {
    level: level,
    name: name,
  });
  await expect(heading).toBeVisible();
}

// This function logs in to the application
async function login(page: Page) {
  await page.goto("/");
  await page.fill('input[name="identifier"]', process.env.USERNAME as string);
  await page.click('button[data-localization-key="formButtonPrimary"]');
  await page.fill('input[name="password"]', process.env.PASSWORD as string);
  await page.click('button[data-localization-key="formButtonPrimary"]');
  await expect(page).toHaveURL("/");
}

test.describe("Home Page Test", () => {
  // This function logs in to the application before each test
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test.describe("Chapter List Navigation", () => {
    chapterData.forEach((chapter) => {
      test(`should navigate to ${chapter.title}`, async ({ page }) => {
        await page.goto("/");

        // Locate the list item containing the chapter title and description
        const listItemLocator = page.locator(
          `li:has-text("${chapter.description}")`
        );
        await expect(listItemLocator).toBeVisible();

        await listItemLocator.click();
        await expect(page).toHaveURL(new RegExp(`/${chapter.route}`));
      });
    });
  });

  test.describe("Interactive Component Navigation", () => {
    interactiveComponentData.forEach((component) => {
      test(`should navigate to ${component.title}`, async ({ page }) => {
        await page.goto("/");

        const listItemLocator = page.locator(
          `li:has-text("${component.title}")`
        );
        await expect(listItemLocator).toBeVisible();

        await listItemLocator.click();
        await expect(page).toHaveURL(new RegExp(`/${component.route}`));
      });
    });
  });

  test.describe("Privacy & Copyright Link Navigation", () => {
    test("should navigate to the Privacy & Copyright page", async ({
      page,
    }) => {
      await page.goto("/");

      const linkLocator = page.locator("text=Privacy & Copyright");
      await linkLocator.click();
      await expect(page).toHaveURL("/terms");
    });
  });
});

test.describe("Chapter Page Test", () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  chapterInfo.forEach((chapter) => {
    test(`should navigate to the home page from ${chapter.id}`, async ({
      page,
    }) => {
      await page.goto(`/${chapter.id}`);

      await page.locator('a[href="/"] button').click();

      await checkHeadingVisibility(page, "iConcepts in Orthodontics", 1);
    });
  });

  chapterInfo.forEach((chapter) => {
    test(`should navigate to the ${chapter.id}/${chapter.page} page`, async ({
      page,
    }) => {
      await page.goto(`/${chapter.id}`);

      await page.locator(`a[href="/${chapter.id}/${chapter.page}"]`).click();

      await expect(page).toHaveURL(
        new RegExp(`/${chapter.id}/${chapter.page}`)
      );
    });
  });

  chapterInfo.forEach((chapter) => {
    chapter.chapterSection.forEach((section) => {
      test(`should navigate to the ${chapter.id}/${section.id} page`, async ({
        page,
      }) => {
        await page.goto(`/${chapter.id}`);

        // Locate the description element
        const descriptionLocator = page.locator(`text=${section.description}`);

        // Find the link that is an ancestor of the description element
        const linkLocator = descriptionLocator.locator(
          `xpath=ancestor::a[@href="/${chapter.id}/${section.page}"]`
        );

        await linkLocator.click();

        await expect(page).toHaveURL(
          new RegExp(`/${chapter.id}/${section.page}`)
        );
      });
    });
  });
});

test.describe("Page24 E2E Test", () => {
  const PAGE_NUMBER = "24";

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto(`/chapter4/page${PAGE_NUMBER}`);
  });

  test("to the previous page", async ({ page }) => {
    await goToPreviousPage(page, Number(PAGE_NUMBER));
  });

  test("to the next page", async ({ page }) => {
    await goToNextPage(page, Number(PAGE_NUMBER));
    // Check if the heading on page 25 is visible
    await checkHeadingVisibility(page, "FUNCTIONAL APPLIANCES", 2); //25
  });
});

test.describe("Page25 E2E Test", () => {
  const PAGE_NUMBER = "25";

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto(`/chapter4/page${PAGE_NUMBER}`);
  });

  test("to the previous page", async ({ page }) => {
    await goToPreviousPage(page, Number(PAGE_NUMBER));
    await checkHeadingVisibility(page, "Chapter 4", 2); //24
  });

  test("to the next page", async ({ page }) => {
    await goToNextPage(page, Number(PAGE_NUMBER));
    await checkHeadingVisibility(page, "Gallery 4.1", 3); //26
  });
});

test.describe("Page26 E2E Test", () => {
  const PAGE_NUMBER = "26";

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto(`/chapter4/page${PAGE_NUMBER}`);
  });

  test("to the previous page", async ({ page }) => {
    await goToPreviousPage(page, Number(PAGE_NUMBER));
    await checkHeadingVisibility(page, "FUNCTIONAL APPLIANCES", 2); //25
  });

  test("to the next page", async ({ page }) => {
    await goToNextPage(page, Number(PAGE_NUMBER));
    await checkHeadingVisibility(page, "Clinical Management", 3); //27
  });
});

test.describe("Page27 E2E Test", () => {
  const PAGE_NUMBER = "27";

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto(`/chapter4/page${PAGE_NUMBER}`);
  });

  test("to the previous page", async ({ page }) => {
    await goToPreviousPage(page, Number(PAGE_NUMBER));
    await checkHeadingVisibility(page, "Gallery 4.1", 3); //26
  });

  test("to the next page", async ({ page }) => {
    await goToNextPage(page, Number(PAGE_NUMBER));
    await checkHeadingVisibility(
      page,
      "INDICATIONS OF FUNCTIONAL APPLIANCES",
      3
    ); //28
  });
});

test.describe("Page28 E2E Test", () => {
  const PAGE_NUMBER = "28";

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto(`/chapter4/page${PAGE_NUMBER}`);
  });

  test("to the previous page", async ({ page }) => {
    await goToPreviousPage(page, Number(PAGE_NUMBER));
    await checkHeadingVisibility(page, "Clinical Management", 3); //27
  });

  test("to the next page", async ({ page }) => {
    await goToNextPage(page, Number(PAGE_NUMBER));
    const HEADING_NAME = "H5P Learning Experience";
    await checkHeadingVisibility(page, HEADING_NAME, 1); //29
  });
});

test.describe("Page29 E2E Test", () => {
  const PAGE_NUMBER = "29";

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto(`/chapter4/page${PAGE_NUMBER}`);
  });

  test("to the previous page", async ({ page }) => {
    await goToPreviousPage(page, Number(PAGE_NUMBER));
    await checkHeadingVisibility(
      page,
      "INDICATIONS OF FUNCTIONAL APPLIANCES",
      3
    ); //28
  });

  test("to the next page", async ({ page }) => {
    await goToNextPage(page, Number(PAGE_NUMBER));
    const HEADING_NAME =
      "Relax in nature and have hobbies that enhance your creativity :)";
    await checkHeadingVisibility(page, HEADING_NAME, 3); //30
  });
});

test.describe("Page30 E2E Test", () => {
  const PAGE_NUMBER = "30";

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto(`/chapter4/page${PAGE_NUMBER}`);
  });

  test("to the previous page", async ({ page }) => {
    await goToPreviousPage(page, Number(PAGE_NUMBER));
    const HEADING_NAME = "H5P Learning Experience";
    await checkHeadingVisibility(page, HEADING_NAME, 1); //29
  });

  test("to the next page", async ({ page }) => {
    await goToNextPage(page, Number(PAGE_NUMBER));
    const HEADING_NAME = "LEAN Study Methodology for Effective Learning";
    await checkHeadingVisibility(page, HEADING_NAME, 1); //31
  });
});

test.describe("Page31 E2E Test", () => {
  const PAGE_NUMBER = "31";

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto(`/chapter5/page${PAGE_NUMBER}`);
  });

  test("to the previous page", async ({ page }) => {
    await goToPreviousPage(page, Number(PAGE_NUMBER));
    const HEADING_NAME =
      "Relax in nature and have hobbies that enhance your creativity :)";
    await checkHeadingVisibility(page, HEADING_NAME, 3); //30
  });

  test("to the next page", async ({ page }) => {
    await goToNextPage(page, Number(PAGE_NUMBER));
    const HEADING_NAME = "HOW TO STUDY EFFECTIVELY";
    await checkHeadingVisibility(page, HEADING_NAME, 2); //32
  });
});

test.describe("Page32 E2E Test", () => {
  const PAGE_NUMBER = "32";

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto(`/chapter5/page${PAGE_NUMBER}`);
  });

  test("to the previous page", async ({ page }) => {
    await goToPreviousPage(page, Number(PAGE_NUMBER));
    const HEADING_NAME = "LEAN Study Methodology for Effective Learning";
    await checkHeadingVisibility(page, HEADING_NAME, 1); //31
  });

  test("to the next page", async ({ page }) => {
    await goToNextPage(page, Number(PAGE_NUMBER));
    await checkHeadingVisibility(page, "Movie 5.1", 3); //33
  });
});

test.describe("Page33 E2E Test", () => {
  const PAGE_NUMBER = "33";

  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto(`/chapter5/page${PAGE_NUMBER}`);
  });

  test("to the previous page", async ({ page }) => {
    await goToPreviousPage(page, Number(PAGE_NUMBER));
    const HEADING_NAME = "HOW TO STUDY EFFECTIVELY";
    await checkHeadingVisibility(page, HEADING_NAME, 2); //32
  });

  test("to the next page", async ({ page }) => {
    await goToNextPage(page, Number(PAGE_NUMBER));
    await expect(page).toHaveURL("/chapter5/page34");
  });
});
