function calculatewords()
{
    const text_area = document.getElementById("usercomments")

    const result = document.getElementById("result")

    const text_area_contents = text_area.value

    const str_to_arr = text_area_contents.split(" ")

    const arr_words = str_to_arr.length

    result.innerHTML = `${arr_words} Words`

}