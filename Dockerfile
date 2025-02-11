# Use an official Node.js runtime as a parent image
FROM node:20.16.0 as base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM build as dev
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/public /app/public
EXPOSE 3000
CMD ["pnpm", "dev"]

FROM prod-deps as prod
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/public /app/public
EXPOSE 3000
CMD ["pnpm", "start"]