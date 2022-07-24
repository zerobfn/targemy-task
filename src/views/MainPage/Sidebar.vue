<template>
    <div class="Sidebar">
        <div class="Sidebar_section">
        </div>
        <div class="Sidebar_section">
            <div class="Sidebar_section-item">
                <img class="Sidebar_section-item--icon" :src="require('@/assets/feed_icon.svg')"/>
                <p class="Sidebar_section-item--text">
                    Лента
                </p>
            </div>
            <div class="Sidebar_section-item">
                <img class="Sidebar_section-item--icon" :src="require('@/assets/trends_icon.svg')"/>
                <p class="Sidebar_section-item--text">
                    Тренды
                </p>
            </div>
            <div class="Sidebar_section-item">
                <img class="Sidebar_section-item--icon" :src="require('@/assets/bookmark_icon.svg')"/>
                <p class="Sidebar_section-item--text">
                    Закладки
                </p>
            </div>
        </div>
        <div class="Sidebar_section">
            <div class="Sidebar_section-item">
                <img class="Sidebar_section-item--icon" :src="require('@/assets/post_icon.svg')"/>
                <p class="Sidebar_section-item--text">
                    Создать пост
                </p>
            </div>
            <div class="Sidebar_section-item">
                <img class="Sidebar_section-item--icon" :src="require('@/assets/notification_icon.svg')"/>
                <p class="Sidebar_section-item--text">
                    Уведомления
                </p>
            </div>
            <div class="Sidebar_section-item">
                <img class="Sidebar_section-item--icon" :src="require('@/assets/cards_icon.svg')"/>
                <p class="Sidebar_section-item--text">
                    Мои карточки
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style lang="scss" scoped>
.Sidebar {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-end;
    max-width: 460px;
    padding: 20px;
    &_section {
        width: 100%;
        max-width: 300px;
        margin-bottom: 20px;
        &-item {
            display: flex;
            align-items: center;
            max-width: 300px;
            height: 62px;
            border-bottom: 1px solid #F6F6F6;
            transition: background-color 0.3s ease;
            &--text {
                margin-left: 20px;
            }
            &:hover {
                cursor: pointer;
                background-color: #eef8ff;
            }
            &:first-child {
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
            }
            &:last-child {
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
                border-bottom: none;
            }
        }
    }
}
</style>