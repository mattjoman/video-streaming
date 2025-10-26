import React from 'react';

function TagSelector({ tags, onChange }: { tags: string[], onChange: any }) {

  function handleChange(tag: string) {
    onChange(tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]);
  }

  return (
    <div>
      <button
        onClick={() => handleChange('nature')}
        className={ tags.includes('nature') ? 'tag-selected' : 'tag-unselected' }
      >nature</button>
      <button
        onClick={() => handleChange('misc')}
        className={ tags.includes('misc') ? 'tag-selected' : 'tag-unselected' }
      >misc</button>
    </div>
  );
}

export default TagSelector;
export { TagSelector };
