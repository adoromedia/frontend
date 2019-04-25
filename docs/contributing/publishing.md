# Publishing HMCTS Frontend

This guide explains how to publish a new version of HMCTS on NPM.

1. Checkout **master** and pull latest changes.

2. Run `nvm use` to ensure you are using the right version of Node.js and npm.

3. Run `npm install` to ensure you have the latest dependencies installed.

4. Create and checkout a new branch: run `git checkout -b release-x.x.x-phase` for example `git checkout -b release-0.0.34-alpha`.

5. Update [`CHANGELOG.md`](../../CHANGELOG.md) "Unreleased" heading with the new version number.
   This should be incremented based on [Semantic versioning](https://semver.org/) from the unreleased changes listed.

6. Update [`package/package.json`](../../package/package.json) version with the new version number.
This should be incremented based on [Semantic versioning](https://semver.org/) from the unreleased changes listed.

7. Save the changes. Do not commit.

8. (Optional) Test in [HMCTSDesign System](git@github.com:hmcts/design-system.git)

  If you want to test your changes work correctly when used in the HMCTS Design System you can use [npm link](https://docs.npmjs.com/cli/link) to test before publishing.

  ```bash
  cd ../design-system
  git checkout master
  npm install # note running `npm install` after `npm link` will destroy the link.
  npm link ../@hmcts/frontend/package/
  ```

  When you have finished you need to unlink the package

  ```bash
  npm unlink ../@hmcts/frontend/package/
  ```

9. Push the branch to Github

10. Create a pull request and copy the changelog text.
   When reviewing the PR, check that the version numbers have been updated and that the compiled assets use this version number.

11. Once the pull request is approved, merge to **master**.

12. Create a release in the [Github interface](https://github.com/hmcts/frontend/releases/new)
  - select the latest tag version
  - set "HMCTS Frontend release v[version-number]" as the title
  - add release notes from changelog
  - mark the release as a pre-release
  - publish release

This will automatically update the package folder with the latest contents and publish to NPM.