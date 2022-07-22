import s from './App.module.css';

function App() {
  let dayInputRef, monthInputRef, yearInputRef, calendarBtnRef;

  const highlightField = (ref) => {
    ref.focus()
    setTimeout(() => {
      ref.setSelectionRange(0, ref.value.length)
    }, 0);
  }

  function handleKeydown(e, ref) {
    switch (ref.id) {
      case 'day':
        if (e.code === 'ArrowLeft') highlightField(dayInputRef)
        if (e.code === 'ArrowRight') highlightField(monthInputRef)
        break;
      case 'month':
        if (e.code === 'ArrowLeft') highlightField(dayInputRef)
        if (e.code === 'ArrowRight') highlightField(yearInputRef)
        break;
      case 'year':
        if (e.code === 'ArrowLeft') highlightField(monthInputRef)
        if (e.code === 'ArrowRight') highlightField(calendarBtnRef)
        break;
      default:
        return;
    }
    // ref.setSelectionRange(0, val.length);
  }

  function handleDayInput(e) {
    let v;
    v = e.currentTarget.value.length > 2 ?
      e.currentTarget.value.slice(0, 2) : e.currentTarget.value

    v = v.replace(/\D/g, "")
    console.log({ v });

    if (v === '' || v === '00') {
      v = 'dd'
      highlightField(dayInputRef)
      return dayInputRef.value = v
    }

    if (v.length === 2 && v[0] === "0") {
      highlightField(monthInputRef)
      return dayInputRef.value = v
    }

    if (+v > 3) {
      if (+v < 10) {
        v = `0${v}`
      }

      highlightField(monthInputRef)
      return dayInputRef.value = v
    }
  }

  // function handleMonthInput(e) {
  //   let v;
  //   v = e.currentTarget.value.length > 2 ?
  //     e.currentTarget.value.slice(0, 2) : e.currentTarget.value

  //   v = v.replace(/\D/g, "")
  //   console.log({ v });

  //   if (v === '' || v === '00') {
  //     v = 'mm'
  //     highlightField(monthInputRef)
  //     return monthInputRef.value = v
  //   }

  //   if (v.length === 2 && v[0] === "0") {
  //     highlightField(yearInputRef)
  //     return monthInputRef.value = v
  //   }

  //   if (+v > 3) {
  //     if (+v < 10) {
  //       v = `0${v}`
  //     }

  //     highlightField(monthInputRef)
  //     return monthInputRef.value = v
  //   }
  // }


  function adjustField(e, ref, type) {
    let val = e.currentTarget.value
    if (val.length === 1) {
      val = `0${val}`
    }

    switch (type) {
      case 'day':
        if (+val > 31) {
          ref.value = 31
        }
        break;
      case 'month':
      case 'year':
    }

    ref.value = val
  }

  return (
    <div class={s.App}>
      <input
        ref={dayInputRef}
        type="text"
        id="day"
        value="dd"
        onInput={handleDayInput}
        onKeyDown={e => handleKeydown(e, dayInputRef)}
        onFocus={e => highlightField(dayInputRef)}
        onBlur={e => adjustField(e, dayInputRef, 'day')}
      // onFocus={e => {
      //   dayInputRef.setSelectionRange(
      //     0, e.currentTarget.value.length
      //   );
      // }}
      />
      <input
        ref={monthInputRef}
        type="text"
        value="mm"
        id="month"
        // onInput={handleMonthInput}
        onKeyDown={e => handleKeydown(e, monthInputRef)}
        onFocus={e => highlightField(monthInputRef)}
        onBlur={e => adjustField(e, dayInputRef, 'month')}

      // onFocus={e => {
      //   monthInputRef.setSelectionRange(
      //     0,
      //     e.currentTarget.value.length
      //   );
      // }}
      />
      <input
        ref={yearInputRef}
        type="text"
        value="yyyy"
        id="year"
        onKeyDown={e => handleKeydown(e, yearInputRef)}
        onFocus={e => highlightField(yearInputRef)}
        onBlur={e => adjustField(e, dayInputRef, 'year')}
      // onFocus={e => {
      //   yearInputRef.setSelectionRange(
      //     0,
      //     e.currentTarget.value.length
      //   );
      // }}
      />
      <button ref={calendarBtnRef}>Cal</button>
    </div>
  );
}

export default App;
