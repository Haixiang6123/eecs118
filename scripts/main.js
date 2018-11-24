! function() {
    renderGroup('Group A')
}()

function selectGroup(event) {
    event.preventDefault();

    let $target = $(event.target)
    let $dropdownTrigger = $('#dropdown-trigger')
    let groupId = $target.text()

    // Update trigger text
    $dropdownTrigger.text(groupId)

    // Render a group to front page
    renderGroup(groupId)
}

function renderGroup(groupId) {
    let groupData = db[groupId]
    let $problemImages = $('#problem-images')
    let $members = $('#members')
    let $groupTitle = $('#group-title')

    $problemImages.empty()
    $members.empty()

    $groupTitle.text(groupId)

    groupData.images.forEach(imageSrc => {
        $problemImages.append(`<img class="d-block" src="${imageSrc}">`)
    });

    groupData.members.forEach(memberData => {
        $members.append(`<p><a href="${memberData.url}">${memberData.name}</a></p>`)
    })

    setTimeout(() => {
        animate()
    }, 10);
}

function animate() {
    $('#problem-images img').each(function() {
        $(this).addClass('active')
    })

    $('#members p').each(function() {
        $(this).addClass('active')
    })
}
