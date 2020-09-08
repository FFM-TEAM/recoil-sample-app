import { useCallback, useState } from 'react';

export default function UseToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);
  const onToggle = useCallback(() => {
    setValue(!value);
  }, [value]);
  return [value, onToggle] as [boolean, typeof onToggle];
}
