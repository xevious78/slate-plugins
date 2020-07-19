import * as React from "react";
import { ReactEditor, useSlate } from "slate-react";
import { ToggleTypeEditor } from "../../../common/plugins/withToggleType";
import { ToolbarButton } from "../../../components/ToolbarButton/index";
import { ToolbarElementProps } from "../../../components/ToolbarElement/ToolbarElement.types";
import { wrapBlockquote } from "../transforms";
/**
 * Toolbar button to toggle the type of elements in selection.
 */
export const ToolbarElementWrapBlockquote = ({
  type,
  ...props
}: ToolbarElementProps) => {
  const editor = useSlate() as ReactEditor & ToggleTypeEditor;

  return (
    <ToolbarButton
      active={false}
      onMouseDown={() => wrapBlockquote(editor, { typeBlockquote: type })}
      {...props}
    />
  );
};
