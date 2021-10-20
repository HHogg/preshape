import { JSONOutput } from 'typedoc';

export const getComment = (props: JSONOutput.Reflection) =>
  props.comment &&
  props.comment.shortText;

export const getIsOptional = (props: JSONOutput.Reflection) =>
  props.flags &&
  props.flags.isOptional;

export const getTag = (props: JSONOutput.Reflection, tagName: string) =>
  props.comment &&
  props.comment.tags &&
  (props.comment.tags.find(({ tag }) => tag === tagName) || {}).text;

export const getParam = (props: JSONOutput.Reflection, paramName: string) =>
  props.comment &&
  props.comment.tags &&
  (props.comment.tags.find(({ param, tag }) => tag === 'param' && param === paramName) || {}).text;
