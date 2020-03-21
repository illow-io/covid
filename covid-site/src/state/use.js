import useGlobal from './useGlobal';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export default hook => {
  const [globalState, globalActions] = useGlobal();
  return [globalState[hook], globalActions[`set${capitalize(hook)}`]];
};