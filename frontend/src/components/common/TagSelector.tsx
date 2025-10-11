import React from 'react';

function TagSelector({ tags, onChange }: { tags: string[], onChange: any }) {

  function handleChange(tag: string) {
    onChange(tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]);
  }

  return (
    <div>
      <button
        onClick={() => handleChange('nature')}
        style={{ backgroundColor: tags.includes('nature') ? 'gray' : 'white' }}
      >nature</button>
      <button
        onClick={() => handleChange('misc')}
        style={{ backgroundColor: tags.includes('misc') ? 'gray' : 'white' }}
      >misc</button>
    </div>
  );
}

export default TagSelector;
export { TagSelector };
