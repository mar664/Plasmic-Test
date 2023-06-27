// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kLBHGn3Vn82YBnTDGnqJfk
// Component: Tj6Oe-jFTy

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
import Button from "../../Button"; // plasmic-import: FxpPQ7-wWLy/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: P4BrsHd2XTVTCj/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: kLBHGn3Vn82YBnTDGnqJfk/projectcss
import sty from "./PlasmicMenu.module.css"; // plasmic-import: Tj6Oe-jFTy/css

import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: Gqwa6DeJAl/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: nuudgiLMynC/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: aDyTX0prrq/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: 9MkRSXMJEb/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: logztJZIqxF/icon

export type PlasmicMenu__VariantMembers = {
  clicked: "_default" | "dropdown";
};
export type PlasmicMenu__VariantsArgs = {
  clicked?: SingleChoiceArg<"_default" | "dropdown">;
};
type VariantPropType = keyof PlasmicMenu__VariantsArgs;
export const PlasmicMenu__VariantProps = new Array<VariantPropType>("clicked");

export type PlasmicMenu__ArgsType = {};
type ArgPropType = keyof PlasmicMenu__ArgsType;
export const PlasmicMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicMenu__OverridesType = {
  showMenu?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  dataFetcher?: p.Flex<typeof Fetcher>;
};

export interface DefaultMenuProps {
  clicked?: SingleChoiceArg<"_default" | "dropdown">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicMenu__RenderFunc(props: {
  variants: PlasmicMenu__VariantsArgs;
  args: PlasmicMenu__ArgsType;
  overrides: PlasmicMenu__OverridesType;
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
        path: "clicked",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.clicked
      },
      {
        path: "buttonClicked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const [isShowMenuHover, triggerShowMenuHoverProps] = useTrigger(
    "useHover",
    {}
  );
  const triggers = {
    hover_showMenu: isShowMenuHover
  };

  return (
    <div
      data-plasmic-name={"showMenu"}
      data-plasmic-override={overrides.showMenu}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.showMenu,
        {
          [sty.showMenuclicked__default]: hasVariant(
            $state,
            "clicked",
            "_default"
          ),
          [sty.showMenuclicked_dropdown]: hasVariant(
            $state,
            "clicked",
            "dropdown"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerShowMenuHoverProps]}
    >
      {true ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cxVs2,
              {
                [sty.textclicked__default__cxVs2Cb5Yx]: hasVariant(
                  $state,
                  "clicked",
                  "_default"
                )
              }
            )}
          >
            {hasVariant($state, "clicked", "_default") ? "Hello You" : "\uf015"}
          </div>
          {(hasVariant($state, "clicked", "_default") ? true : true) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zOxGj,
                {
                  [sty.textclicked__default__zOxGjCb5Yx]: hasVariant(
                    $state,
                    "clicked",
                    "_default"
                  )
                }
              )}
            >
              {hasVariant($state, "clicked", "_default") ? (
                "Hello You"
              ) : (
                <div
                  className={projectcss.__wab_expr_html_text}
                  dangerouslySetInnerHTML={{
                    __html: (() => {
                      try {
                        return $state.buttonClicked;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "";
                        }
                        throw e;
                      }
                    })()
                  }}
                />
              )}
            </div>
          ) : null}
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fiy4K,
              {
                [sty.textclicked__default__fiy4KCb5Yx]: hasVariant(
                  $state,
                  "clicked",
                  "_default"
                )
              }
            )}
          >
            {hasVariant($state, "clicked", "_default")
              ? "Hello You"
              : "Enter some text"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__o2EB,
              {
                [sty.textclicked__default__o2EBCb5Yx]: hasVariant(
                  $state,
                  "clicked",
                  "_default"
                )
              }
            )}
          >
            {hasVariant($state, "clicked", "_default")
              ? "Hello You"
              : "Enter some text"}
          </div>
          <Icon2Icon
            className={classNames(projectcss.all, sty.svg__qTi6B, {
              [sty.svgclicked__default__qTi6BCb5Yx]: hasVariant(
                $state,
                "clicked",
                "_default"
              )
            })}
            role={"img"}
          />
        </div>
      ) : null}
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__sPcP,
          {
            [sty.textclicked__default__sPcPcb5Yx]: hasVariant(
              $state,
              "clicked",
              "_default"
            )
          }
        )}
      >
        {hasVariant($state, "clicked", "_default") ? (
          "Yes You"
        ) : (
          <React.Fragment>
            {(() => {
              try {
                return $state.buttonClicked;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Hey";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        )}
      </div>
      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button, {
          [sty.buttonclicked__default]: hasVariant(
            $state,
            "clicked",
            "_default"
          )
        })}
        onClick={async event => {
          const $steps = {};
          $steps["showMenu"] = !$state.buttonClicked
            ? (() => {
                const actionArgs = {
                  vgroup: __wrapUserFunction(
                    {
                      type: "InteractionArgLoc",
                      actionName: "updateVariant",
                      interactionUuid: "t44RigwPW",
                      componentUuid: "Tj6Oe-jFTy",
                      argName: "vgroup"
                    },
                    () => "clicked"
                  ),
                  operation: __wrapUserFunction(
                    {
                      type: "InteractionArgLoc",
                      actionName: "updateVariant",
                      interactionUuid: "t44RigwPW",
                      componentUuid: "Tj6Oe-jFTy",
                      argName: "operation"
                    },
                    () => 0
                  ),
                  value: __wrapUserFunction(
                    {
                      type: "InteractionArgLoc",
                      actionName: "updateVariant",
                      interactionUuid: "t44RigwPW",
                      componentUuid: "Tj6Oe-jFTy",
                      argName: "value"
                    },
                    () => "_default"
                  )
                };
                return __wrapUserFunction(
                  {
                    type: "InteractionLoc",
                    actionName: "updateVariant",
                    interactionUuid: "t44RigwPW",
                    componentUuid: "Tj6Oe-jFTy"
                  },
                  () =>
                    (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      p.set($state, vgroup, value);
                      return value;
                    })?.apply(null, [actionArgs]),
                  actionArgs
                );
              })()
            : undefined;
          if (
            typeof $steps["showMenu"] === "object" &&
            typeof $steps["showMenu"].then === "function"
          ) {
            $steps["showMenu"] = await __wrapUserPromise(
              {
                type: "InteractionLoc",
                actionName: "updateVariant",
                interactionUuid: "t44RigwPW",
                componentUuid: "Tj6Oe-jFTy"
              },
              $steps["showMenu"]
            );
          }
          $steps["hideMenu"] =
            $state.buttonClicked === true
              ? (() => {
                  const actionArgs = {
                    vgroup: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "Tx_0_WhBt",
                        componentUuid: "Tj6Oe-jFTy",
                        argName: "vgroup"
                      },
                      () => "clicked"
                    ),
                    operation: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "Tx_0_WhBt",
                        componentUuid: "Tj6Oe-jFTy",
                        argName: "operation"
                      },
                      () => 1
                    ),
                    value: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "Tx_0_WhBt",
                        componentUuid: "Tj6Oe-jFTy",
                        argName: "value"
                      },
                      () => "_default"
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariant",
                      interactionUuid: "Tx_0_WhBt",
                      componentUuid: "Tj6Oe-jFTy"
                    },
                    () =>
                      (({ vgroup, value }) => {
                        if (typeof value === "string") {
                          value = [value];
                        }

                        p.set($state, vgroup, undefined);
                        return undefined;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
          if (
            typeof $steps["hideMenu"] === "object" &&
            typeof $steps["hideMenu"].then === "function"
          ) {
            $steps["hideMenu"] = await __wrapUserPromise(
              {
                type: "InteractionLoc",
                actionName: "updateVariant",
                interactionUuid: "Tx_0_WhBt",
                componentUuid: "Tj6Oe-jFTy"
              },
              $steps["hideMenu"]
            );
          }
          $steps["buttonClicked"] = true
            ? (() => {
                const actionArgs = {
                  customFunction: __wrapUserFunction(
                    {
                      type: "InteractionArgLoc",
                      actionName: "customFunction",
                      interactionUuid: "dWhFEJBbP",
                      componentUuid: "Tj6Oe-jFTy",
                      argName: "customFunction"
                    },
                    () => () => {
                      return ($state.buttonClicked = !$state.buttonClicked);
                    }
                  )
                };
                return __wrapUserFunction(
                  {
                    type: "InteractionLoc",
                    actionName: "customFunction",
                    interactionUuid: "dWhFEJBbP",
                    componentUuid: "Tj6Oe-jFTy"
                  },
                  () =>
                    (({ customFunction }) => {
                      return customFunction();
                    })?.apply(null, [actionArgs]),
                  actionArgs
                );
              })()
            : undefined;
          if (
            typeof $steps["buttonClicked"] === "object" &&
            typeof $steps["buttonClicked"].then === "function"
          ) {
            $steps["buttonClicked"] = await __wrapUserPromise(
              {
                type: "InteractionLoc",
                actionName: "customFunction",
                interactionUuid: "dWhFEJBbP",
                componentUuid: "Tj6Oe-jFTy"
              },
              $steps["buttonClicked"]
            );
          }
        }}
      >
        {(hasVariant($state, "clicked", "_default") ? true : true) ? (
          <Icon3Icon
            className={classNames(projectcss.all, sty.svg__kTrho, {
              [sty.svgclicked__default__kTrhoCb5Yx]: hasVariant(
                $state,
                "clicked",
                "_default"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(hasVariant($state, "clicked", "_default") ? true : false) ? (
          <Icon4Icon
            className={classNames(projectcss.all, sty.svg__mymun, {
              [sty.svgclicked__default__mymunCb5Yx]: hasVariant(
                $state,
                "clicked",
                "_default"
              )
            })}
            role={"img"}
          />
        ) : null}
      </Button>
      {(triggers.hover_showMenu ? true : true) ? (
        <Fetcher
          data-plasmic-name={"dataFetcher"}
          data-plasmic-override={overrides.dataFetcher}
          className={classNames("__wab_instance", sty.dataFetcher)}
          queries={$queries}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  showMenu: ["showMenu", "freeBox", "button", "dataFetcher"],
  freeBox: ["freeBox"],
  button: ["button"],
  dataFetcher: ["dataFetcher"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  showMenu: "div";
  freeBox: "div";
  button: typeof Button;
  dataFetcher: typeof Fetcher;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenu__VariantsArgs;
    args?: PlasmicMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenu__ArgsType,
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
          internalArgPropNames: PlasmicMenu__ArgProps,
          internalVariantPropNames: PlasmicMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "showMenu") {
    func.displayName = "PlasmicMenu";
  } else {
    func.displayName = `PlasmicMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicMenu = Object.assign(
  // Top-level PlasmicMenu renders the root element
  makeNodeComponent("showMenu"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    button: makeNodeComponent("button"),
    dataFetcher: makeNodeComponent("dataFetcher"),

    // Metadata about props expected for PlasmicMenu
    internalVariantProps: PlasmicMenu__VariantProps,
    internalArgProps: PlasmicMenu__ArgProps
  }
);

export default PlasmicMenu;
/* prettier-ignore-end */
