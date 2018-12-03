! function() {
    renderDropdown()

    renderWrapper(db)
}()

function selectGroup(event) {
    // event.preventDefault();

    let $target = $(event.target)
    let $dropdownTrigger = $('#dropdown-trigger')
    let groupId = $target.text()

    // Update trigger text
    $dropdownTrigger.text(groupId)

    // Render a group to front page
    // renderGroup(groupId)
}

function renderDropdown() {
    let $dropdown = $('#dropdown')
    for (let key in db) {
        $dropdown.append($(`<a class="dropdown-item" href="#wrapper-${key}">Group ${key.split('-')[1]}</a>`))
    }
}

function renderWrapper(db) {
    let $solver = $('#solver')
    for (let key in db) {
        $solver.append($(`<div id="wrapper-${key}" class="wrapper-${key}">
            <span id=group-title" class="h1">${key}</span>
            <div id="problem-images-${key}" class="problem-images"> </div>
            <div id="members-${key}" class="members"> </div>
            <hr>
        </div>`))
        renderGroup(key)
    }
}

function renderGroup(groupId) {
    let groupData = db[groupId]
    let $problemImages = $(`#problem-images-${groupId}`)
    let $members = $(`#members-${groupId}`)
    // let $groupTitle = $(`#group-title-${groupId}`)

    // $problemImages.empty()
    // $members.empty()

    // $groupTitle.text(groupId)

    groupData.images.forEach(imageSrc => {
        $problemImages.append($(`<img class="d-block" src="${imageSrc}">`))
    });

    groupData.members.forEach(memberData => {
        $members.append($(`<p><a href="${memberData.url}">${memberData.name}</a></p>`))
    })

    // setTimeout(() => {
    //     animate()
    // }, 10);
}

function animate() {
    $('#problem-images img').each(function() {
        $(this).addClass('active')
    })

    $('#members p').each(function() {
        $(this).addClass('active')
    })
}
