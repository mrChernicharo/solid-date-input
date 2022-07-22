import s from './App.module.css';

function App() {
  let dayInputRef, monthInputRef, yearInputRef;

  const highlightField = (ref) => {
    ref.focus()
    setTimeout(() => ref.setSelectionRange(
      0, ref.value.length
    ), 0);
  }


  function handleKeydown(e, ref) {
    console.log(e.code, ref.id, ref);
    switch (ref.id) {
      case 'day':
        if (e.code === 'ArrowRight') highlightField(monthInputRef)
        break;
      case 'month':
        if (e.code === 'ArrowLeft') highlightField(dayInputRef)
        if (e.code === 'ArrowRight') highlightField(yearInputRef)
        break;
      case 'year':
        if (e.code === 'ArrowLeft') highlightField(monthInputRef)
        break;
      default:
        return;
    }
    // ref.setSelectionRange(0, val.length);
  }

  function handleDayInput(e) {
    let val = e.currentTarget.value;
    console.log({ val, e, dayInputRef });
  }

  return (
    <div class={s.App}>
      <input
        ref={dayInputRef}
        type="text"
        id="day"
        value="dd"
        onKeyDown={e => handleKeydown(e, dayInputRef)}
        onFocus={e => {
          dayInputRef.setSelectionRange(
            0, e.currentTarget.value.length
          );
        }}
        onInput={handleDayInput}
      />
      <input
        ref={monthInputRef}
        type="text"
        value="mm"
        id="month"
        onKeyDown={e => handleKeydown(e, monthInputRef)}
        onFocus={e => {
          monthInputRef.setSelectionRange(
            0,
            e.currentTarget.value.length
          );
        }}
      />
      <input
        ref={yearInputRef}
        type="text"
        value="yyyy"
        id="year"
        onKeyDown={e => handleKeydown(e, yearInputRef)}
        onFocus={e => {
          yearInputRef.setSelectionRange(
            0,
            e.currentTarget.value.length
          );
        }}
      />
    </div>
  );
}

export default App;
