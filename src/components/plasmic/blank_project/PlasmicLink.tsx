// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kLBHGn3Vn82YBnTDGnqJfk
// Component: FST3lsHJsh

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: kLBHGn3Vn82YBnTDGnqJfk/projectcss
import sty from "./PlasmicLink.module.css"; // plasmic-import: FST3lsHJsh/css

export type PlasmicLink__VariantMembers = {
  type: "headerLink" | "navMenuLink";
  active: "active";
};
export type PlasmicLink__VariantsArgs = {
  type?: SingleChoiceArg<"headerLink" | "navMenuLink">;
  active?: SingleBooleanChoiceArg<"active">;
};
type VariantPropType = keyof PlasmicLink__VariantsArgs;
export const PlasmicLink__VariantProps = new Array<VariantPropType>(
  "type",
  "active"
);

export type PlasmicLink__ArgsType = {
  linkUrl?: string;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicLink__ArgsType;
export const PlasmicLink__ArgProps = new Array<ArgPropType>(
  "linkUrl",
  "children"
);

export type PlasmicLink__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultLinkProps {
  linkUrl?: string;
  children?: React.ReactNode;
  type?: SingleChoiceArg<"headerLink" | "navMenuLink">;
  active?: SingleBooleanChoiceArg<"active">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLink__RenderFunc(props: {
  variants: PlasmicLink__VariantsArgs;
  args: PlasmicLink__ArgsType;
  overrides: PlasmicLink__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      },
      {
        path: "active",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.active
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootactive]: hasVariant($state, "active", "active"),
          [sty.roottype_headerLink]: hasVariant($state, "type", "headerLink"),
          [sty.roottype_headerLink_active]:
            hasVariant($state, "type", "headerLink") &&
            hasVariant($state, "active", "active"),
          [sty.roottype_navMenuLink]: hasVariant($state, "type", "navMenuLink")
        }
      )}
      href={args.linkUrl}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Some link text",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildrenactive]: hasVariant(
            $state,
            "active",
            "active"
          ),
          [sty.slotTargetChildrentype_headerLink]: hasVariant(
            $state,
            "type",
            "headerLink"
          ),
          [sty.slotTargetChildrentype_headerLink_active]:
            hasVariant($state, "type", "headerLink") &&
            hasVariant($state, "active", "active"),
          [sty.slotTargetChildrentype_navMenuLink]: hasVariant(
            $state,
            "type",
            "navMenuLink"
          )
        })
      })}
    </a>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLink__VariantsArgs;
    args?: PlasmicLink__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLink__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLink__ArgProps,
          internalVariantPropNames: PlasmicLink__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLink";
  } else {
    func.displayName = `PlasmicLink.${nodeName}`;
  }
  return func;
}

export const PlasmicLink = Object.assign(
  // Top-level PlasmicLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLink
    internalVariantProps: PlasmicLink__VariantProps,
    internalArgProps: PlasmicLink__ArgProps
  }
);

export default PlasmicLink;
/* prettier-ignore-end */
