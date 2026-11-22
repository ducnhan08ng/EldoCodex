/**
 * EL DORADO HERO CODEX & EXCLUSIVE EQUIPMENT DATA
 * Tự động tạo và trích xuất từ dữ liệu game chính thức ELDORADO_RELEASE (min1113.js)
 * Cập nhật: Full dàn 8 sao (24 tướng), 9 sao (8 tướng) và 6 Bộ Trang Bị Độc Quyền (Exclusive Item Sets)
 */

const INNATE_ABILITY_DESC = {
    "PUSH_IMM": { name: "Miễn Đẩy Lùi", desc: "Kháng lực đẩy, giữ vững vị trí tiền tuyến không bị đẩy lùi.", color: "emerald", icon: "🛡️" },
    "DIGNITY_IMM": { name: "Miễn Uy Áp", desc: "Kháng hiệu ứng Uy Áp Thần Khí, giữ nguyên tốc độ xuất chiêu.", color: "sky", icon: "👑" },
    "TIME_STOP_IMM": { name: "Miễn Dừng Thời Gian", desc: "Không bị ảnh hưởng bởi Time Stop, tự do hành động và ra chiêu.", color: "amber", icon: "⏳" },
    "INSTANT_KILL_IMM": { name: "Miễn Trảm Sát", desc: "Kháng tuyệt đối đòn đánh kết liễu 1 hit, không thể bị chém chết ngay.", color: "rose", icon: "⚔️" },
    "FREEZE_IMM": { name: "Miễn Đóng Băng", desc: "Kháng trạng thái đóng băng, duy trì khả năng di chuyển và tấn công.", color: "cyan", icon: "❄️" },
    "SLOW_IMM": { name: "Miễn Làm Chậm", desc: "Giữ 100% tốc chạy và tốc đánh, miễn nhiễm mọi hào quang làm chậm.", color: "indigo", icon: "⚡" },
    "BURN_IMM": { name: "Miễn Thiêu Đốt", desc: "Kháng hoàn toàn sát thương thiêu đốt theo thời gian hệ Hỏa.", color: "orange", icon: "🔥" },
    "ANGRY_BURN_IMM": { name: "Miễn Hỏa Cuồng Nộ", desc: "Kháng sát thương dung nham thiêu đốt cấp cao (Map 14).", color: "red", icon: "🌋" },
    "CHAOS_GALE_IMM": { name: "Miễn Lốc Hỗn Mang", desc: "Kháng cuồng phong hất tung, không bị lốc xoáy làm ngắt chiêu (Map 15).", color: "teal", icon: "🌪️" },
    "OSOK_IMM": { name: "Miễn Chết 1 Hit (OSOK)", desc: "Kháng đòn bạo kích One Shot One Kill, chặn kẻ địch one-hit chết ngay.", color: "yellow", icon: "⭐" }
};

const SPECIAL_ABILITY_DESC = {
    // === NHÓM TẤN CÔNG & ĐÒN ĐÁNH ĐẶC BIỆT ===
    "MULTI_HIT": { 
        name: "Đa Kích (Multi-Hit)", 
        desc: "Xuất chiêu tung liên hoàn 15-25 hit sát thương dồn dập, phá giáp lượt cực nhanh.", 
        color: "pink", 
        icon: "💥" 
    },
    "TF_ATTACK_UPGRADE": { 
        name: "Cường Hóa Biến Hình", 
        desc: "Khi biến hình ma đạo, đòn đánh lan được tăng thêm từ 10% đến 100% sát thương.", 
        color: "purple", 
        icon: "⚡" 
    },
    "INSTANT_KILL": { 
        name: "Trảm Sát Tử Thần", 
        desc: "Đòn đánh có 16% - 25% tỉ lệ chém kết liễu mục tiêu lập tức nếu địch không có miễn trảm.", 
        color: "rose", 
        icon: "☠️" 
    },
    "CUR_HP_DAMAGE": { 
        name: "Trảm Máu % Hiện Tại", 
        desc: "Đòn đánh gây sát thương bằng 50% lượng máu hiện tại của địch, khắc chế boss trâu máu.", 
        color: "red", 
        icon: "🩸" 
    },
    "PUSH": { 
        name: "Đẩy Lùi Quân Địch", 
        desc: "Tạo xung lực đẩy dạt toàn bộ tiền tuyến địch về sau với tỉ lệ 50% - 100%.", 
        color: "blue", 
        icon: "💨" 
    },
    "SNAKE_BIND": { 
        name: "Trói Buộc Linh Xà", 
        desc: "Triệu linh xà khóa chân toàn bộ kẻ địch trúng đòn, làm tê liệt trong 3.0s - 5.0s.", 
        color: "teal", 
        icon: "🐍" 
    },
    "COLD_AURA": { 
        name: "Hàn Khí Cực Bắc", 
        desc: "Hào quang giá lạnh làm chậm 10% - 50% tốc chạy và tốc đánh của kẻ địch xung quanh.", 
        color: "cyan", 
        icon: "❄️" 
    },

    // === NHÓM HỖ TRỢ, BUFF ĐỒNG MINH & SINH TỒN ===
    "ARMOR": { 
        name: "Giáp Sắt Lượt Đánh", 
        desc: "Miễn nhiễm mọi đòn một phát chết ngay; HP tính theo số lượt nhận đòn (46 hit).", 
        color: "zinc", 
        icon: "🛡️" 
    },
    "FORTITUDE": { 
        name: "Bất Khuất Bất Tử", 
        desc: "Khi dính sát thương chí mạng, có xác suất giữ lại 1 máu và tiếp tục chiến đấu.", 
        color: "amber", 
        icon: "🔥" 
    },
    "HARVEST_MOON": { 
        name: "Nguyệt Quang Trăng Rằm", 
        desc: "Hào quang trăng rằm gia tăng 10% - 30% toàn bộ chỉ số công thủ và tốc độ cho bản thân.", 
        color: "fuchsia", 
        icon: "🌕" 
    },
    "TORTOISE_AP_BUFF": { 
        name: "Khí Quy Thần (Tortoise AP)", 
        desc: "Khi kích hoạt trạng thái Fever, nhân 1.2x đến 2.0x sát thương công kích (AP).", 
        color: "lime", 
        icon: "🐢" 
    },
    "TORTOISE_SPIRIT": { 
        name: "Linh Vật Huyền Vũ", 
        desc: "Triệu hồi Thần Quy hồi 30% - 50% HP đồng minh và cộng dồn stack buff sát thương.", 
        color: "emerald", 
        icon: "🎋" 
    },
    "VALOR_BUGLE": { 
        name: "Tù Và Dũng Mãnh", 
        desc: "Thổi tù và chiến trận gia tăng tức thì 60% - 80% sức tấn công (AP) cho toàn quân.", 
        color: "amber", 
        icon: "🎺" 
    },
    "ENHANCED_HEALER": { 
        name: "Đại Trị Liệu Sư", 
        desc: "Khuếch đại thêm 30% - 50% lượng máu hồi phục cho toàn thể đồng minh và thành trì.", 
        color: "emerald", 
        icon: "💖" 
    },
    "STEALTH": { 
        name: "Thuật Ẩn Thân (Tàng Hình)", 
        desc: "Ẩn mình né tránh hoàn toàn 100% đòn đánh xa và chiêu thức thông thường của địch.", 
        color: "slate", 
        icon: "👤" 
    },
    "SPRINT": { 
        name: "Tốc Hành Thần Tốc", 
        desc: "Bứt tốc độ di chuyển cực đại lao nhanh về trước, áp sát chiến tuyến tức thì.", 
        color: "green", 
        icon: "👟" 
    },
    "MOONLIGHT_LEAP": { 
        name: "Nguyệt Ảnh Nhảy Vọt", 
        desc: "Nhảy né đòn và giảm 20% - 100% thời gian tái tạo triệu hồi tướng cho toàn đội.", 
        color: "violet", 
        icon: "🌙" 
    },
    "CAN_ABS": { 
        name: "Hấp Thụ Sát Thương", 
        desc: "Tạo màng chắn linh lực hấp thụ sát thương nhận vào chuyển hóa thành lớp giáp hộ thân.", 
        color: "sky", 
        icon: "🔮" 
    },

    // === NHÓM ĐẶC QUYỀN ĐẤU TRƯỜNG PVP ===
    "PVP_TEAM_DAMAGE_REDUCTION": { 
        name: "Hộ Thuẫn Đồng Minh PVP", 
        desc: "Giảm trực tiếp 10% - 50% toàn bộ sát thương đồng minh nhận phải trong PVP.", 
        color: "teal", 
        icon: "🛡️" 
    },
    "PVP_CHAR_SEAL": { 
        name: "Phong Ấn Tướng Địch PVP", 
        desc: "Phong ấn tướng địch ngẫu nhiên trong PVP, khóa kỹ năng đặc biệt trong thời gian ấn định.", 
        color: "purple", 
        icon: "🔒" 
    },
    "PVP_HP_AP_UP": { 
        name: "Song Cực Tăng Trưởng PVP", 
        desc: "Tăng thêm 100% - 200% lượng Máu (HP) và Sức Công (AP) cho toàn đội khi đấu PVP.", 
        color: "emerald", 
        icon: "📈" 
    },
    "PVP_TOWER_DAMAGE": { 
        name: "Công Phá Trụ Thành PVP", 
        desc: "Tăng thêm 20% - 80% sát thương trực tiếp vào thành chính đối phương trong PVP.", 
        color: "orange", 
        icon: "🏰" 
    },
    "PVP_TOWER_SHIELD": { 
        name: "Khiên Thành Bảo Vệ PVP", 
        desc: "Tạo lá chắn năng lượng bảo vệ thành chính phe mình, miễn nhiễm sát thương 3.0s - 5.0s.", 
        color: "sky", 
        icon: "🛡️" 
    },
    "PVP_TOWER_HP_HEAL_DOWN": { 
        name: "Chặn Hồi Máu Thành PVP", 
        desc: "Giảm mạnh khả năng tự hồi phục sinh lực của thành trì đối phương trong giao tranh.", 
        color: "orange", 
        icon: "🚫" 
    },
    "PVP_SCORE_UP": { 
        name: "Tăng Điểm Xếp Hạng PVP", 
        desc: "Tăng thêm 20% - 100% điểm vinh danh xếp hạng nhận được sau mỗi trận thắng PVP.", 
        color: "yellow", 
        icon: "🏆" 
    }
};

const EXCLUSIVE_ITEMS_DATA = [
    {
        "hero_id": 115,
        "hero_key": "rabbit",
        "hero_name": "Lunar Rabbit (Ngọc Thố)",
        "hero_title": "Cung Quảng Hàn Nguyệt Thần",
        "banner_img": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/24_item/it_setability_rabbit.png",
        "avatar_url": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch115.png",
        "items": [
            {
                "slot": "casque",
                "slot_name": "Nón / Ruy Băng",
                "name": "Ruy Băng Nguyệt Miêu Ngọc Thố",
                "raw_name": "월묘의 리본",
                "grade": "A",
                "folder": "10_casque",
                "filename": "a_lunarrabbit_casque",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/10_casque/itemsm_a_lunarrabbit_casque.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/10_casque/itembig_a_lunarrabbit_casque.png",
                "option_type": "PS",
                "option_name": "Tốc Độ Sản Xuất (PS)",
                "option_val": "+465",
                "desc": "Chiếc ruy băng ngọc thỏ tỏa ánh hào quang ánh trăng, giúp hỗ trợ hồi phục và tiếp sức cho cả đội."
            },
            {
                "slot": "weapon",
                "slot_name": "Vũ Khí",
                "name": "Pháp Trượng Búa Giã Thuốc Trăng",
                "raw_name": "월묘의 마법봉",
                "grade": "A",
                "folder": "10_weapon",
                "filename": "a_lunarrabbit_weapon",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/10_weapon/itemsm_a_lunarrabbit_weapon.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/10_weapon/itembig_a_lunarrabbit_weapon.png",
                "option_type": "AP",
                "option_name": "Sát Thương Công Kích (AP)",
                "option_val": "+650",
                "desc": "Cây trượng phép giã thuốc trường sinh, vừa có thể hồi phục sinh mệnh đồng đội vừa triệu hồi thiên thạch hủy diệt."
            },
            {
                "slot": "armor",
                "slot_name": "Áo Giáp",
                "name": "Hanbok Nguyệt Quang Thần Tiên",
                "raw_name": "월묘의 한복",
                "grade": "A",
                "folder": "10_armor",
                "filename": "a_lunarrabbit_armor",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/10_armor/itemsm_a_lunarrabbit_armor.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/10_armor/itembig_a_lunarrabbit_armor.png",
                "option_type": "HP",
                "option_name": "Sinh Lực / Lượt Giáp (HP/Armor)",
                "option_val": "+500",
                "desc": "Bộ lễ phục Hanbok cung trăng bảo vệ thỏ ngọc với 46 lượt giáp sắt hộ thể vững chãi."
            },
            {
                "slot": "shoes",
                "slot_name": "Giày / Hoa Hài",
                "name": "Hoa Hài Ánh Trăng Thêu Hoa",
                "raw_name": "월묘의 꽃신",
                "grade": "A",
                "folder": "10_shoes",
                "filename": "a_lunarrabbit_shoes",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/10_shoes/itemsm_a_lunarrabbit_shoes.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/10_shoes/itembig_a_lunarrabbit_shoes.png",
                "option_type": "SP",
                "option_name": "Tốc Độ Di Chuyển (SP)",
                "option_val": "+465",
                "desc": "Đôi hài thêu hoa giúp thỏ ngọc nhảy nhót thoăn thoắt trên chiến trường, né tránh hiểm nguy tức thời."
            }
        ],
        "set_effects": {
            "set1": {
                "pieces": 1,
                "title": "Hiệu Ứng 1 Món (Set 1)",
                "summary": "Tăng Lượng Hồi Máu Toàn Phe Đồng Minh",
                "detail": "Tăng thêm +50% AP, +10 Lượt Giáp (HP). Kỹ năng [Trị Liệu Cường Hóa (Enhanced Healer)]: Lượng hồi máu đồng minh tăng thêm +20%."
            },
            "set2": {
                "pieces": 2,
                "title": "Hiệu Ứng 2 Món (Set 2)",
                "summary": "Tiết Kiệm Khoáng Sản & Tăng Tốc Xuất Quân",
                "detail": "Tăng thêm +50% AP, +10 Lượt Giáp (HP). Kỹ năng [Trung Thu Vui Vẻ]: Giảm tiêu hao khoáng sản (MR) và rút ngắn thời gian sinh tướng (PS) thêm 20%."
            },
            "set3": {
                "pieces": 3,
                "title": "Hiệu Ứng 3 Món (Set 3)",
                "summary": "Gia Tăng Tốc Độ Di Chuyển Toàn Quân",
                "detail": "Tăng thêm +50% AP, +10 Lượt Giáp (HP). Kỹ năng [Nhảy Ánh Trăng (Moonlight Leap)]: Tốc độ di chuyển (SP) tăng vọt thêm 20%."
            },
            "set4": {
                "pieces": 4,
                "title": "Hiệu Ứng Trọn Bộ 4 Món (Full Set 4)",
                "summary": "Thiên Thạch Trăng Tròn Cực Đại (+5 Hit)",
                "detail": "Tăng thêm +100% AP, +20 Lượt Giáp (HP). Kỹ năng [Thiên Thạch Trăng Tròn (Full Moon Meteor)]: Số lần thiên thạch nổ trúng kẻ địch tăng thêm tới 5 lần!"
            }
        }
    },
    {
        "hero_id": 112,
        "hero_key": "raven",
        "hero_name": "Black Raven (Hắc Nha)",
        "hero_title": "Hắc Ảnh Ám Sát Thần",
        "banner_img": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/24_item/it_setability_raven.png",
        "avatar_url": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch112.png",
        "items": [
            {
                "slot": "casque",
                "slot_name": "Nón / Mặt Nạ",
                "name": "Mặt Nạ Quỷ Hắc Nha",
                "raw_name": "현오의 마스크",
                "grade": "A",
                "folder": "9_casque",
                "filename": "a_blackraven_casque",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/9_casque/itemsm_a_blackraven_casque.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/9_casque/itembig_a_blackraven_casque.png",
                "option_type": "PS",
                "option_name": "Tốc Độ Sản Xuất (PS)",
                "option_val": "+465",
                "desc": "Mặt nạ che giấu tung tích, giúp ninja bóng tối hòa lẫn vào sương đêm không để lại dấu vết."
            },
            {
                "slot": "weapon",
                "slot_name": "Vũ Khí",
                "name": "Phi Tiêu Phong Ma Hắc Nha",
                "raw_name": "현오의 수리검",
                "grade": "A",
                "folder": "9_weapon",
                "filename": "a_blackraven_weapon",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/9_weapon/itemsm_a_blackraven_weapon.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/9_weapon/itembig_a_blackraven_weapon.png",
                "option_type": "AP",
                "option_name": "Sát Thương Công Kích (AP)",
                "option_val": "+650",
                "desc": "Ám khí phi đao sắc bén tẩm kịch độc hắc quạ, xuyên phá tuyến sau của kẻ địch trong nháy mắt."
            },
            {
                "slot": "armor",
                "slot_name": "Áo Giáp",
                "name": "Áo Dạ Hành Ám Dạ",
                "raw_name": "현오의 닌자복",
                "grade": "A",
                "folder": "9_armor",
                "filename": "a_blackraven_armor",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/9_armor/itemsm_a_blackraven_armor.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/9_armor/itembig_a_blackraven_armor.png",
                "option_type": "HP",
                "option_name": "Sinh Lực Tối Đa (HP)",
                "option_val": "+500",
                "desc": "Ninja phục được dệt bằng sợi tơ bóng đêm tàng hình, gia tăng khả năng sinh tồn và né tránh sát thương."
            },
            {
                "slot": "shoes",
                "slot_name": "Giày / Áo Choàng",
                "name": "Áo Choàng Vũ Dực Hắc Nha",
                "raw_name": "현오의 망토",
                "grade": "A",
                "folder": "9_shoes",
                "filename": "a_blackraven_shoes",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/9_shoes/itemsm_a_blackraven_shoes.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/9_shoes/itembig_a_blackraven_shoes.png",
                "option_type": "SP",
                "option_name": "Tốc Độ Di Chuyển (SP)",
                "option_val": "+465",
                "desc": "Áo choàng lông quạ nâng bước chân lướt gió, đạt tốc độ di chuyển cao nhất trong toàn bộ giới nhẫn giả."
            }
        ],
        "set_effects": {
            "set1": {
                "pieces": 1,
                "title": "Hiệu Ứng 1 Món (Set 1)",
                "summary": "Tăng Né Tránh & Tàng Hình Ẩn Thân",
                "detail": "Tăng thêm +50% AP và +50% HP. Tỉ lệ né tránh và kích hoạt tàng hình (Stealth/Evasion) tăng thêm 20%."
            },
            "set2": {
                "pieces": 2,
                "title": "Hiệu Ứng 2 Món (Set 2)",
                "summary": "Tăng Mạnh Sát Thương Dấu Ấn Hắc Quạ",
                "detail": "Tăng thêm +50% AP và +50% HP. Kỹ năng [Dấu Ấn Hắc Quạ (Raven Mark)]: Sát thương bộc phá tăng thêm +40%."
            },
            "set3": {
                "pieces": 3,
                "title": "Hiệu Ứng 3 Món (Set 3)",
                "summary": "Giảm Thời Gian Tái Kích Hoạt Dấu Ấn",
                "detail": "Tăng thêm +50% AP và +50% HP. Kỹ năng [Dấu Ấn Hắc Quạ]: Giãn cách thời gian giữa các đợt tấn công giảm đi 5 giây."
            },
            "set4": {
                "pieces": 4,
                "title": "Hiệu Ứng Trọn Bộ 4 Món (Full Set 4)",
                "summary": "Cường Hóa Phân Thân Thuật (+1 Hit Đánh)",
                "detail": "Tăng thêm +100% AP và +100% HP. Kỹ năng [Phân Thân Thuật (Shadow Clone)]: Tăng thêm 1 lần số lượng đòn đánh liên kích."
            }
        }
    },
    {
        "hero_id": 107,
        "hero_key": "flame",
        "hero_name": "Flame Cavalier (Liệt Diễm Kỵ Sĩ)",
        "hero_title": "Hồng Diễm Long Kỵ",
        "banner_img": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/24_item/it_setability_flame.png",
        "avatar_url": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch107.png",
        "items": [
            {
                "slot": "casque",
                "slot_name": "Nón / Mũ Giáp",
                "name": "Mũ Giáp Chiến Kỵ Hồng Diễm",
                "raw_name": "홍염의 투구",
                "grade": "A",
                "folder": "8_casque",
                "filename": "a_flamecavalier_casque",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/8_casque/itemsm_a_flamecavalier_casque.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/8_casque/itembig_a_flamecavalier_casque.png",
                "option_type": "PS",
                "option_name": "Tốc Độ Sản Xuất (PS)",
                "option_val": "+465",
                "desc": "Mũ sắt tôi luyện trong dung nham ngàn độ, thắp lên ý chí chiến đấu bất diệt của kỵ sĩ rồng lửa."
            },
            {
                "slot": "weapon",
                "slot_name": "Vũ Khí",
                "name": "Hồng Diễm Đại Kích Xuyên Giáp",
                "raw_name": "홍염의 할버드",
                "grade": "A",
                "folder": "8_weapon",
                "filename": "a_flamecavalier_weapon",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/8_weapon/itemsm_a_flamecavalier_weapon.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/8_weapon/itembig_a_flamecavalier_weapon.png",
                "option_type": "AP",
                "option_name": "Sát Thương Công Kích (AP)",
                "option_val": "+650",
                "desc": "Trường kích rực lửa chém tan mọi lá chắn và xuyên thủng hàng phòng ngự kiên cố nhất."
            },
            {
                "slot": "armor",
                "slot_name": "Áo Giáp",
                "name": "Trọng Chiến Giáp Liệt Hỏa",
                "raw_name": "홍염의 갑옷",
                "grade": "A",
                "folder": "8_armor",
                "filename": "a_flamecavalier_armor",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/8_armor/itemsm_a_flamecavalier_armor.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/8_armor/itembig_a_flamecavalier_armor.png",
                "option_type": "HP",
                "option_name": "Sinh Lực / Lượt Giáp (HP/Armor)",
                "option_val": "+500",
                "desc": "Áo giáp vảy rồng đỏ siêu cứng, cung cấp 46 lượt giáp sắt chịu đựng mọi cơn bão công kích."
            },
            {
                "slot": "shoes",
                "slot_name": "Giày / Chiến Mã",
                "name": "Chiến Mã Thiên Lý Hồng Diễm",
                "raw_name": "홍염의 천마",
                "grade": "A",
                "folder": "8_shoes",
                "filename": "a_flamecavalier_shoes",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/8_shoes/itemsm_a_flamecavalier_shoes.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/8_shoes/itembig_a_flamecavalier_shoes.png",
                "option_type": "SP",
                "option_name": "Tốc Độ Di Chuyển (SP)",
                "option_val": "+465",
                "desc": "Chiến mã chân đạp lửa tung vó lao về phía trước, càn quét tan rã đội hình địch."
            }
        ],
        "set_effects": {
            "set1": {
                "pieces": 1,
                "title": "Hiệu Ứng 1 Món (Set 1)",
                "summary": "Giảm Triệt Để Hồi Máu Trụ Địch",
                "detail": "Tăng thêm +50% AP, +10 Lượt Giáp (HP). Hiệu ứng giảm hồi máu trụ đối phương tăng thêm 9%."
            },
            "set2": {
                "pieces": 2,
                "title": "Hiệu Ứng 2 Món (Set 2)",
                "summary": "Tăng Số Lần Đánh Trúng Kỹ Năng (+2 Hit)",
                "detail": "Tăng thêm +50% AP, +10 Lượt Giáp (HP). Kỹ năng [Hỏa Diễm Kỵ Sĩ]: Số lượt đánh trúng (Hit count) tăng thêm 2 lần."
            },
            "set3": {
                "pieces": 3,
                "title": "Hiệu Ứng 3 Món (Set 3)",
                "summary": "Cường Hóa Buff Tù Và Dũng Mãnh",
                "detail": "Tăng thêm +50% AP, +10 Lượt Giáp (HP). Kỹ năng [Tù Và Dũng Mãnh]: Lượng buff tăng công kích (AP) cho toàn đội tăng thêm +10%."
            },
            "set4": {
                "pieces": 4,
                "title": "Hiệu Ứng Trọn Bộ 4 Món (Full Set 4)",
                "summary": "Đại Bùng Nổ Liên Hoàn Kích (+3 Hit Nữa)",
                "detail": "Tăng thêm +100% AP, +20 Lượt Giáp (HP). Kỹ năng [Hỏa Diễm Kỵ Sĩ]: Số lượt đánh trúng tăng thêm 3 lần nữa (Tổng cộng tăng tới 5 hit liên hoàn)!"
            }
        }
    },
    {
        "hero_id": 106,
        "hero_key": "serpent",
        "hero_name": "Spirit Serpent (Linh Xà)",
        "hero_title": "Huyền Băng Dị Mãng",
        "banner_img": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/24_item/it_setability_serpent.png",
        "avatar_url": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch106.png",
        "items": [
            {
                "slot": "casque",
                "slot_name": "Nón / Băng Đô",
                "name": "Băng Đô Hàn Ngọc Linh Xà",
                "raw_name": "영사의 머리띠",
                "grade": "A",
                "folder": "7_casque",
                "filename": "a_spiritserpent_casque",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/7_casque/itemsm_a_spiritserpent_casque.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/7_casque/itembig_a_spiritserpent_casque.png",
                "option_type": "PS",
                "option_name": "Tốc Độ Sản Xuất (PS)",
                "option_val": "+465",
                "desc": "Dải băng trán phong ấn hàn khí nghìn năm từ Bắc Cực, giải phóng nguồn ma lực đóng băng diện rộng."
            },
            {
                "slot": "weapon",
                "slot_name": "Vũ Khí",
                "name": "Linh Xà Trượng Xích Thần",
                "raw_name": "영사의 뱀",
                "grade": "A",
                "folder": "7_weapon",
                "filename": "a_spiritserpent_weapon",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/7_weapon/itemsm_a_spiritserpent_weapon.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/7_weapon/itembig_a_spiritserpent_weapon.png",
                "option_type": "AP",
                "option_name": "Sát Thương Công Kích (AP)",
                "option_val": "+650",
                "desc": "Con rắn linh hồn quấn quanh quyền trượng, có thể phun ra dòng độc hàn ăn mòn sinh mệnh kẻ địch."
            },
            {
                "slot": "armor",
                "slot_name": "Áo Giáp",
                "name": "Đạo Phục Băng Sa Linh Xà",
                "raw_name": "영사의 도복",
                "grade": "A",
                "folder": "7_armor",
                "filename": "a_spiritserpent_armor",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/7_armor/itemsm_a_spiritserpent_armor.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/7_armor/itembig_a_spiritserpent_armor.png",
                "option_type": "HP",
                "option_name": "Sinh Lực Tối Đa (HP)",
                "option_val": "+500",
                "desc": "Bộ trang phục bảo hộ tỏa ra làn khói giá lạnh làm chậm mọi đòn đánh hướng tới."
            },
            {
                "slot": "shoes",
                "slot_name": "Giày / Linh Ngoa",
                "name": "Linh Ngoa Băng Tuyết",
                "raw_name": "영사의 부츠",
                "grade": "A",
                "folder": "7_shoes",
                "filename": "a_spiritserpent_shoes",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/7_shoes/itemsm_a_spiritserpent_shoes.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/7_shoes/itembig_a_spiritserpent_shoes.png",
                "option_type": "SP",
                "option_name": "Tốc Độ Di Chuyển (SP)",
                "option_val": "+465",
                "desc": "Giày lướt trên mặt băng trơn nhẵn, đưa Linh Xà đến điểm nóng giao tranh chỉ trong chớp mắt."
            }
        ],
        "set_effects": {
            "set1": {
                "pieces": 1,
                "title": "Hiệu Ứng 1 Món (Set 1)",
                "summary": "Tăng Chỉ Số & Cường Hóa Hàn Khí Phương Bắc",
                "detail": "Tăng thêm +50% AP và +50% HP. Kỹ năng [Hàn Khí Phương Bắc]: Tỉ lệ làm chậm và giảm chỉ số địch tăng thêm 20%."
            },
            "set2": {
                "pieces": 2,
                "title": "Hiệu Ứng 2 Món (Set 2)",
                "summary": "Tăng Thời Gian Trói Buộc Linh Xà",
                "detail": "Tăng thêm +50% AP và +50% HP. Kỹ năng [Trói Buộc Linh Xà]: Thời gian khống chế trói giữ tăng thêm 3 giây."
            },
            "set3": {
                "pieces": 3,
                "title": "Hiệu Ứng 3 Món (Set 3)",
                "summary": "Gấp Đôi ST Stack Linh Vật Huyền Vũ",
                "detail": "Tăng thêm +50% AP và +50% HP. Kỹ năng [Linh Vật Huyền Vũ - Vũ Lăng Đào Nguyên]: Sát thương cộng dồn theo mỗi stack tăng thêm +100%."
            },
            "set4": {
                "pieces": 4,
                "title": "Hiệu Ứng Trọn Bộ 4 Món (Full Set 4)",
                "summary": "Giáng Lâm Dị Mãng - Khống Chế Toàn Diện",
                "detail": "Tăng thêm +100% AP và +100% HP. Kỹ năng [Giáng Lâm - Dị Mãng]: Toàn bộ kẻ địch trúng đòn đều bị áp dụng ngay hiệu ứng [Trói Buộc Linh Xà]!"
            }
        }
    },
    {
        "hero_id": 105,
        "hero_key": "mukhyang",
        "hero_name": "Mukhyang (Mặc Hương)",
        "hero_title": "Bách Chiến Đao Ma",
        "banner_img": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/24_item/it_setability_mukhyang.png",
        "avatar_url": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch105.png",
        "items": [
            {
                "slot": "casque",
                "slot_name": "Nón / Trâm Cài",
                "name": "Trâm Cài Huyền Thiết Mặc Hương",
                "raw_name": "묵향의 비녀",
                "grade": "A",
                "folder": "6_casque",
                "filename": "a_mukhyang_casque",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/6_casque/itemsm_a_mukhyang_casque.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/6_casque/itembig_a_mukhyang_casque.png",
                "option_type": "PS",
                "option_name": "Tốc Độ Sản Xuất (PS)",
                "option_val": "+465",
                "desc": "Trâm cài ngưng tụ kiếm ý ma đạo, gia tăng tốc độ xuất trận và hồi kỹ năng."
            },
            {
                "slot": "weapon",
                "slot_name": "Vũ Khí",
                "name": "Khai Thiên Đoạt Mệnh Rìu Mặc Hương",
                "raw_name": "묵향의 도끼",
                "grade": "A",
                "folder": "6_weapon",
                "filename": "a_mukhyang_weapon",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/6_weapon/itemsm_a_mukhyang_weapon.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/6_weapon/itembig_a_mukhyang_weapon.png",
                "option_type": "AP",
                "option_name": "Sát Thương Công Kích (AP)",
                "option_val": "+650",
                "desc": "Cặp chiến rìu đẫm máu tàn sát ngàn quân, gia tăng uy lực chém bổ và tỉ lệ kết liễu trảm sát cực hạn."
            },
            {
                "slot": "armor",
                "slot_name": "Áo Giáp",
                "name": "Võ Phục Hắc Ma Đạo",
                "raw_name": "묵향의 도복",
                "grade": "A",
                "folder": "6_armor",
                "filename": "a_mukhyang_armor",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/6_armor/itemsm_a_mukhyang_armor.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/6_armor/itembig_a_mukhyang_armor.png",
                "option_type": "HP",
                "option_name": "Sinh Lực / Lượt Giáp (HP/Armor)",
                "option_val": "+500",
                "desc": "Võ phục ma gia được dệt từ tơ tằm hắc ám, giúp Mặc Hương duy trì giáp sắt bất hoại trước liên hoàn chiêu của đối phương."
            },
            {
                "slot": "shoes",
                "slot_name": "Giày / Chiến Ngoa",
                "name": "Chiến Ngoa Đạp Lôi Mặc Hương",
                "raw_name": "묵향의 부츠",
                "grade": "A",
                "folder": "6_shoes",
                "filename": "a_mukhyang_shoes",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/6_shoes/itemsm_a_mukhyang_shoes.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/6_shoes/itembig_a_mukhyang_shoes.png",
                "option_type": "SP",
                "option_name": "Tốc Độ Di Chuyển (SP)",
                "option_val": "+465",
                "desc": "Ủng chiến gia tăng bộ pháp phi hành chớp nhoáng, truy kích bất cứ kẻ địch nào đang có ý định rút lui."
            }
        ],
        "set_effects": {
            "set1": {
                "pieces": 1,
                "title": "Hiệu Ứng 1 Món (Set 1)",
                "summary": "Tăng Chỉ Số & Bách Chiến Bất Đãi",
                "detail": "Tăng thêm +50% AP, +10 Lượt Giáp (HP). Đồng thời kỹ năng [Bách Chiến Bất Đãi]: Tăng thêm +100% AP và +100% HP."
            },
            "set2": {
                "pieces": 2,
                "title": "Hiệu Ứng 2 Món (Set 2)",
                "summary": "Tăng Tỉ Lệ Trảm Sát Tức Tử",
                "detail": "Tăng thêm +50% AP, +10 Lượt Giáp (HP). Kỹ năng [Nhất Đao Lưỡng Đoạn]: Tỉ lệ trảm sát kết liễu lập tức kẻ địch tăng thêm +10%."
            },
            "set3": {
                "pieces": 3,
                "title": "Hiệu Ứng 3 Món (Set 3)",
                "summary": "Cường Hóa Sát Thương Dấu Ấn Trúc Khí",
                "detail": "Tăng thêm +50% AP, +10 Lượt Giáp (HP). Kỹ năng [Dấu Ấn Trúc Khí (Bamboo Mark)]: Tăng thêm 20% sát thương kích nổ."
            },
            "set4": {
                "pieces": 4,
                "title": "Hiệu Ứng Trọn Bộ 4 Món (Full Set 4)",
                "summary": "Giảm Hồi Chiêu Dấu Ấn Trúc Khí Cực Hạn",
                "detail": "Tăng +100% AP, +20 Lượt Giáp (HP). Kỹ năng [Dấu Ấn Trúc Khí]: Giãn cách giữa các lần kích hoạt tấn công giảm mạnh 5 giây."
            }
        }
    },
    {
        "hero_id": 104,
        "hero_key": "ogong",
        "hero_name": "Ogong (Tôn Ngộ Không)",
        "hero_title": "Tề Thiên Đại Thánh",
        "banner_img": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/24_item/it_setability_ogong.png",
        "avatar_url": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch104.png",
        "items": [
            {
                "slot": "casque",
                "slot_name": "Nón / Kim Cô",
                "name": "Kim Cô Bổng của Ngộ Không",
                "raw_name": "오공의 긴고아",
                "grade": "A",
                "folder": "5_casque",
                "filename": "a_ogong_casque",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/5_casque/itemsm_a_ogong_casque.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/5_casque/itembig_a_ogong_casque.png",
                "option_type": "PS",
                "option_name": "Tốc Độ Sản Xuất (PS)",
                "option_val": "+465",
                "desc": "Vòng kim cô phong ấn sức mạnh thần thánh, rút ngắn thời gian hồi chiêu và thời gian triệu hồi tướng trên chiến trường."
            },
            {
                "slot": "weapon",
                "slot_name": "Vũ Khí",
                "name": "Gậy Như Ý của Ngộ Không",
                "raw_name": "오공의 여의봉",
                "grade": "A",
                "folder": "5_weapon",
                "filename": "a_ogong_weapon",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/5_weapon/itemsm_a_ogong_weapon.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/5_weapon/itembig_a_ogong_weapon.png",
                "option_type": "AP",
                "option_name": "Sát Thương Công Kích (AP)",
                "option_val": "+650",
                "desc": "Thần binh Định Hải Thần Trâm nặng mười ba vạn năm nghìn cân, uy lực nghiền nát mọi kẻ thù trên đường đi."
            },
            {
                "slot": "armor",
                "slot_name": "Áo Giáp",
                "name": "Chiến Bào Tỏa Tử Giáp",
                "raw_name": "오공의 갑옷",
                "grade": "A",
                "folder": "5_armor",
                "filename": "a_ogong_armor",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/5_armor/itemsm_a_ogong_armor.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/5_armor/itembig_a_ogong_armor.png",
                "option_type": "HP",
                "option_name": "Sinh Lực Tối Đa (HP)",
                "option_val": "+500",
                "desc": "Áo giáp vàng hộ thân bất hoại, tăng cường sinh lực và khả năng chống chịu trước những đòn đánh tử thần."
            },
            {
                "slot": "shoes",
                "slot_name": "Giày / Pháp Bảo",
                "name": "Cân Đẩu Vân của Ngộ Không",
                "raw_name": "오공의 근두운",
                "grade": "A",
                "folder": "5_shoes",
                "filename": "a_ogong_shoes",
                "img_sm": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/5_shoes/itemsm_a_ogong_shoes.png",
                "img_big": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/5_shoes/itembig_a_ogong_shoes.png",
                "option_type": "SP",
                "option_name": "Tốc Độ Di Chuyển (SP)",
                "option_val": "+465",
                "desc": "Pháp bảo cưỡi mây ngàn dặm trong nháy mắt, giúp Tôn Ngộ Không cơ động áp sát chiến tuyến nhanh chóng."
            }
        ],
        "set_effects": {
            "set1": {
                "pieces": 1,
                "title": "Hiệu Ứng 1 Món (Set 1)",
                "summary": "Tăng Sức Mạnh Bản Thân & Đào Tiên",
                "detail": "Tăng thêm +50% AP và +50% HP. Đồng thời tăng thêm +100% AP và +100% HP cho kỹ năng [Sức Mạnh Đào Tiên]."
            },
            "set2": {
                "pieces": 2,
                "title": "Hiệu Ứng 2 Món (Set 2)",
                "summary": "Tăng Chỉ Số & Giảm Sát Thương Toàn Đội",
                "detail": "Tăng thêm +50% AP và +50% HP. Kỹ năng [Đấu Chiến Thắng Phật]: Toàn bộ tướng đồng minh nhận sát thương giảm thêm 20%."
            },
            "set3": {
                "pieces": 3,
                "title": "Hiệu Ứng 3 Món (Set 3)",
                "summary": "Tăng Chỉ Số & Cường Hóa Khiên Trụ",
                "detail": "Tăng thêm +50% AP và +50% HP. Kỹ năng [Đấu Chiến Thắng Phật]: Lá chắn bảo vệ thành/trụ đồng minh tăng thời gian duy trì thêm 3 giây."
            },
            "set4": {
                "pieces": 4,
                "title": "Hiệu Ứng Trọn Bộ 4 Món (Full Set 4)",
                "summary": "Bộc Phá Sức Mạnh Tề Thiên & Đòn Đánh Phụ",
                "detail": "Tăng vượt trội +100% AP và +100% HP. Trạng thái [Tề Thiên Đại Thánh]: Khi tấn công, lập tức áp dụng thêm 1 đòn đánh bổ trợ liên hoàn."
            }
        }
    }
];

/** DỮ LIỆU TẤT CẢ TƯỚNG 8 SAO VÀ 9 SAO (FULL 32 TƯỚNG) - XẾP TỪ CO_CH CAO VỀ THẤP */
const ALL_CODEX_HEROES = [
    {
        "id": 117,
        "name": "Azure Dragon Ace (Thanh Long Ace)",
        "raw_name": "Azure Dragon Ace",
        "filename": "ally_117",
        "star": 9,
        "feature": "Tấn Công",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 100,
        "move_speed": 6,
        "attack_speed": 20,
        "attack_len": 330,
        "ap_start": 2800,
        "ap_end": 48000,
        "hp_start": 80000,
        "hp_end": 1600000,
        "nm_start": 3300,
        "nm_end": 14000,
        "innate_abilities": [
            "PUSH_IMM",
            "TIME_STOP_IMM",
            "DIGNITY_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [
            "MULTI_HIT",
            "CAN_ABS"
        ],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch117.png",
        "tier": "TIER S",
        "description": "Phiên bản tối thượng của Ace 9★ kết hợp sức mạnh Thanh Long thần thú. Tấn công lan rộng với lượng AP khủng khiếp, nội tại Đa Kích (Multi-Hit) xuyên phá đội hình địch và khả năng tạo khiên chắn hấp thụ sát thương cực hạn (Shield Absorb), là hạt nhân gánh đội trong mọi trận chiến đỉnh cao.",
        "defaultDamage": 16.5,
        "meta_role": "Sát Thương Chủ Lực • Hấp Thụ Khiên",
        "multi_hit": "5 Hit Liên Hoàn (Cố Định Mọi Cấp)",
        "multi_hit_count": [
            5,
            5,
            5,
            5,
            5
        ],
        "multi_hit_note": "Mỗi đòn đánh thường chém bão kiếm 5 hit liên tiếp dồn sát thương vào toàn bộ mục tiêu trước mặt."
    },
    {
        "id": 116,
        "name": "Horus Goldman (Thần Horus)",
        "raw_name": "Horus Goldman",
        "filename": "ally_116",
        "star": 9,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Liên Hoàn",
        "max_level": 100,
        "move_speed": 3,
        "attack_speed": 60,
        "attack_len": 600,
        "ap_start": 16000,
        "ap_end": 260000,
        "hp_start": 85000,
        "hp_end": 1700000,
        "nm_start": 3300,
        "nm_end": 14000,
        "innate_abilities": [
            "PUSH_IMM",
            "TIME_STOP_IMM",
            "DIGNITY_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch116.png",
        "tier": "TIER S",
        "description": "Thần Horus Goldman sở hữu AP max tới 260,000 cùng tầm bắn xa 600px. Đòn đánh lan liên hoàn dồn dập với trọn bộ 8 nội tại kháng khống chế, giữ vị trí tuyến sau xả sát thương hủy diệt vào trụ và đội hình đối phương.",
        "defaultDamage": 16.5,
        "meta_role": "Người Vàng Huyền Thoại • Đánh Lan Liên Hoàn",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 115,
        "name": "Lunar Rabbit (Ngọc Thố)",
        "raw_name": "Lunar Rabbit",
        "filename": "ally_115",
        "star": 8,
        "feature": "Giáp Sắt",
        "attack_type": "Đánh Lan Liên Hoàn",
        "max_level": 90,
        "move_speed": 20,
        "attack_speed": 30,
        "attack_len": 500,
        "ap_start": 2500,
        "ap_end": 40000,
        "hp_start": 1,
        "hp_end": 46,
        "nm_start": 5200,
        "nm_end": 10500,
        "innate_abilities": [
            "PUSH_IMM",
            "TIME_STOP_IMM",
            "DIGNITY_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [
            "ARMOR",
            "HARVEST_MOON",
            "MULTI_HIT",
            "MOONLIGHT_LEAP",
            "ENHANCED_HEALER",
            "PVP_SCORE_UP"
        ],
        "has_exclusive_item": true,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch115.png",
        "tier": "TIER S+",
        "description": "TOP 2 META 2026! Sở hữu Giáp Sắt 46 hit bất hoại, Nguyệt Ảnh Nhảy Vọt giảm mạnh thời gian xuất quân giúp triệu hồi quân ồ ạt. Bộ 4 món độc quyền nâng tầm chiêu Thiên Thạch Trăng Tròn thêm tới +5 lần nổ, sát thương chạm mốc 16.216M điểm.",
        "defaultDamage": 13.98,
        "meta_role": "Hỗ Trợ Toàn Năng • Multi-Hit • Giáp Sắt",
        "multi_hit": "15 ➔ 25 Hit Liên Hoàn (Full Set Độc Quyền +5 Hit)",
        "multi_hit_count": [
            15,
            17,
            20,
            22,
            25
        ],
        "multi_hit_note": "Chiêu Thiên Thạch Trăng Tròn nổ từ 15 đến 25 hit dồn dập; khi kích hoạt Full Set 4 món độc quyền được cộng thêm 5 hit nữa (lên đến 30 hit)."
    },
    {
        "id": 114,
        "name": "Hades Bebee (Minh Vương Bebee)",
        "raw_name": "Hades Bebee",
        "filename": "ally_114",
        "star": 9,
        "feature": "Đánh Lan Rộng",
        "attack_type": "Đánh Lan Liên Hoàn",
        "max_level": 100,
        "move_speed": 6,
        "attack_speed": 20,
        "attack_len": 330,
        "ap_start": 10000,
        "ap_end": 150000,
        "hp_start": 70000,
        "hp_end": 1400000,
        "nm_start": 3000,
        "nm_end": 14000,
        "innate_abilities": [
            "PUSH_IMM",
            "TIME_STOP_IMM",
            "DIGNITY_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [
            "INSTANT_KILL",
            "PUSH"
        ],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch114.png",
        "tier": "TIER S",
        "description": "Minh Vương Bebee cai quản địa ngục với sát thương 150,000 AP lan liên hoàn. Đòn đánh kèm tỉ lệ Trảm Sát lập tức kẻ địch và Đẩy Lùi diện rộng, phá tan chiến tuyến phòng ngự kiên cố nhất của đối thủ.",
        "defaultDamage": 16.5,
        "meta_role": "Trảm Sát Tuyến Sau • Đẩy Lùi Hàng Loạt",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 113,
        "name": "Fallen Angel Gingerman (Thiên Thần Sa Ngã)",
        "raw_name": "Fallen Angel Gingerman",
        "filename": "ally_113",
        "star": 9,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 100,
        "move_speed": 6,
        "attack_speed": 20,
        "attack_len": 280,
        "ap_start": 14000,
        "ap_end": 240000,
        "hp_start": 90000,
        "hp_end": 1800000,
        "nm_start": 3200,
        "nm_end": 14000,
        "innate_abilities": [
            "PUSH_IMM",
            "TIME_STOP_IMM",
            "DIGNITY_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch113.png",
        "tier": "TIER S",
        "description": "Fallen Angel Gingerman sở hữu sức công phá 240,000 AP, càn quét toàn bộ tiền tuyến địch với đòn đánh lan rộng tầm gần 280px. Miễn nhiễm 8 hiệu ứng bất lợi giúp duy trì sức ép nghẹt thở lên thành đối phương.",
        "defaultDamage": 16.5,
        "meta_role": "Đại Pháp Sư Sa Ngã • Càn Quét Diện Rộng",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 112,
        "name": "Black Raven (Hắc Nha)",
        "raw_name": "Black Raven",
        "filename": "ally_112",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 30,
        "attack_speed": 30,
        "attack_len": 600,
        "ap_start": 10000,
        "ap_end": 150000,
        "hp_start": 100000,
        "hp_end": 2000000,
        "nm_start": 5200,
        "nm_end": 10500,
        "innate_abilities": [
            "PUSH_IMM",
            "TIME_STOP_IMM",
            "DIGNITY_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM",
            "CHAOS_GALE_IMM"
        ],
        "special_abilities": [
            "MULTI_HIT",
            "STEALTH",
            "SPRINT",
            "PVP_SCORE_UP",
            "PVP_TOWER_DAMAGE"
        ],
        "has_exclusive_item": true,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch112.png",
        "tier": "TIER S+",
        "description": "TOP 3 META (11.295M điểm)! Tốc chạy 30 nhanh nhất game, tàng hình né đòn và phân thân x2 đòn đánh. Bộ trang bị độc quyền Hắc Nha tăng 40% sát thương Dấu Ấn và thêm 1 hit phân thân, chuyên gia luồn lách phá nát trụ địch.",
        "defaultDamage": 12.85,
        "meta_role": "Sát Thủ Phá Trụ • Tốc Hành Tàng Hình",
        "multi_hit": "x2 Đòn Đánh (Phân Thân Thuật: +1 Hit Kích Hoạt)",
        "multi_hit_count": [
            2,
            2,
            2,
            2,
            2
        ],
        "multi_hit_note": "Kỹ thuật phân thân nhân đôi đòn đánh (x2 hit). Khi kích hoạt Full Set 4 món Hắc Nha, số hit phân thân tăng thêm 1 lần (x3 hit)."
    },
    {
        "id": 111,
        "name": "Party Animal Thrue (Tiệc Tùng)",
        "raw_name": "Party Animal Thrue",
        "filename": "ally_111",
        "star": 9,
        "feature": "Đánh Lan Rộng",
        "attack_type": "Đánh Lan Liên Hoàn",
        "max_level": 100,
        "move_speed": 8,
        "attack_speed": 15,
        "attack_len": 350,
        "ap_start": 18000,
        "ap_end": 300000,
        "hp_start": 85000,
        "hp_end": 1700000,
        "nm_start": 3500,
        "nm_end": 14000,
        "innate_abilities": [
            "PUSH_IMM",
            "TIME_STOP_IMM",
            "DIGNITY_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch111.png",
        "tier": "TIER S",
        "description": "Party Animal Thrue với AP chạm mốc 300,000 cực đại trong dàn 9★. Đòn đánh lan liên hoàn với tốc độ đánh cực nhanh (15), liên tục giải phóng các đợt sóng xung kích nghiền nát tuyến phòng thủ đối phương.",
        "defaultDamage": 16.5,
        "meta_role": "Đấu Sĩ Cuồng Nộ • Bão Sát Thương",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 110,
        "name": "Orchestra Koo (Nhạc Trưởng)",
        "raw_name": "Orchestra Koo",
        "filename": "ally_110",
        "star": 9,
        "feature": "Mục Tiêu",
        "attack_type": "Bắn Tỉa Chuẩn Xác",
        "max_level": 100,
        "move_speed": 6,
        "attack_speed": 30,
        "attack_len": -280,
        "ap_start": 16000,
        "ap_end": 230000,
        "hp_start": 1,
        "hp_end": 1,
        "nm_start": 4000,
        "nm_end": 14000,
        "innate_abilities": [
            "PUSH_IMM",
            "TIME_STOP_IMM",
            "DIGNITY_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch110.png",
        "tier": "TIER S",
        "description": "Nhạc Trưởng Orchestra Koo với cơ chế đứng sau hỗ trợ, AP 230,000 điểm chuẩn xác từng phát bắn. Bắn tỉa xuyên thấu tiêu diệt các mục tiêu nguy hiểm nhất ở cự ly an toàn.",
        "defaultDamage": 16.5,
        "meta_role": "Xạ Thủ Tầm Xa • Bắn Tỉa Chuẩn Xác",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 109,
        "name": "Influencer Lucy (Idol Lucy)",
        "raw_name": "Influencer Lucy",
        "filename": "ally_109",
        "star": 9,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 100,
        "move_speed": 9,
        "attack_speed": 30,
        "attack_len": 950,
        "ap_start": 14000,
        "ap_end": 190000,
        "hp_start": 56000,
        "hp_end": 1200000,
        "nm_start": 3500,
        "nm_end": 14000,
        "innate_abilities": [
            "PUSH_IMM",
            "TIME_STOP_IMM",
            "DIGNITY_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch109.png",
        "tier": "TIER S",
        "description": "Influencer Lucy với tầm đánh xa 950px, liên tục thả bão phép thuật lan rộng 190,000 AP từ khoảng cách an toàn, quấy nhiễu và làm suy yếu toàn bộ quân địch trước khi chúng kịp tiếp cận.",
        "defaultDamage": 16.5,
        "meta_role": "Pháp Sư Tầm Xa • Kiểm Soát Chiến Tuyến",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 108,
        "name": "Mermaid Lucy (Mỹ Nhân Ngư)",
        "raw_name": "Mermaid Lucy",
        "filename": "ally_108",
        "star": 9,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 100,
        "move_speed": 14,
        "attack_speed": 10,
        "attack_len": 680,
        "ap_start": 21000,
        "ap_end": 280000,
        "hp_start": 85000,
        "hp_end": 1700000,
        "nm_start": 3000,
        "nm_end": 21000,
        "innate_abilities": [
            "PUSH_IMM",
            "TIME_STOP_IMM",
            "DIGNITY_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [
            "PUSH",
            "CUR_HP_DAMAGE"
        ],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch108.png",
        "tier": "TIER S",
        "description": "Mỹ Nhân Ngư Lucy sở hữu AP 280,000 cùng tốc đánh thần tốc (10). Sở hữu kỹ năng Trảm Máu theo % HP hiện tại của địch và Đẩy Lùi hàng ngũ đối phương, là khắc tinh số 1 của các quái vật khổng lồ và boss trâu máu.",
        "defaultDamage": 16.5,
        "meta_role": "Trảm Máu % Cực Hạn • Đẩy Lùi Tiền Tuyến",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 107,
        "name": "Flame Cavalier (Liệt Diễm Kỵ Sĩ)",
        "raw_name": "Flame Cavalier",
        "filename": "ally_107",
        "star": 8,
        "feature": "Giáp Sắt",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 20,
        "attack_speed": 30,
        "attack_len": 500,
        "ap_start": 2500,
        "ap_end": 40000,
        "hp_start": 1,
        "hp_end": 46,
        "nm_start": 5200,
        "nm_end": 10500,
        "innate_abilities": [
            "PUSH_IMM",
            "DIGNITY_IMM",
            "TIME_STOP_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM",
            "ANGRY_BURN_IMM"
        ],
        "special_abilities": [
            "ARMOR",
            "MULTI_HIT",
            "VALOR_BUGLE",
            "PVP_SCORE_UP",
            "PVP_TOWER_HP_HEAL_DOWN"
        ],
        "has_exclusive_item": true,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch107.png",
        "tier": "TIER S+",
        "description": "KỶ LỤC GIA META 2026 (18.813M ĐIỂM)! Giáp Sắt 46 hit kết hợp bộ trang bị độc quyền Bậc A Hồng Diễm tăng thêm +5 đòn đánh liên hoàn. Đòn đánh hàng chục hit/lần kết hợp Tù Và Dũng Mãnh buff 80% AP toàn đội, 1 mình càn quét màn 300 dễ dàng.",
        "defaultDamage": 18.813,
        "meta_role": "TOP 1 BENCHMARK • Diệt Quái Hạn Chế",
        "multi_hit": "20 ➔ 30 Hit Liên Hoàn (Full Set Độc Quyền +5 Hit)",
        "multi_hit_count": [
            20,
            22,
            24,
            26,
            30
        ],
        "multi_hit_note": "Hỏa Diễm Kỵ Sĩ tung đại kích từ 20 đến 30 hit càn quét cực hạn; trang bị Set 2 món (+2 hit) và Full Set 4 món (+3 hit nữa), tổng cộng tăng thêm tới 5 hit (lên tới 35 hit)."
    },
    {
        "id": 106,
        "name": "Spirit Serpent (Linh Xà)",
        "raw_name": "Spirit Serpent",
        "filename": "ally_106",
        "star": 8,
        "feature": "Tấn Công",
        "attack_type": "Cận Chiến / Đơn Mục Tiêu",
        "max_level": 90,
        "move_speed": 10,
        "attack_speed": 30,
        "attack_len": 500,
        "ap_start": 15000,
        "ap_end": 200000,
        "hp_start": 100000,
        "hp_end": 2000000,
        "nm_start": 5200,
        "nm_end": 10500,
        "innate_abilities": [
            "PUSH_IMM",
            "DIGNITY_IMM",
            "TIME_STOP_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [
            "TORTOISE_AP_BUFF",
            "FORTITUDE",
            "SNAKE_BIND",
            "COLD_AURA",
            "ENHANCED_HEALER",
            "TORTOISE_SPIRIT",
            "PVP_SCORE_UP"
        ],
        "has_exclusive_item": true,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch106.png",
        "tier": "TIER S+",
        "description": "BẬC THẦY KHỐNG CHẾ PVP! Sở hữu Bất Khuất giữ 1 máu, Hàn Khí cực bắc làm chậm 50% và Trói Buộc Linh Xà khóa chân 5 giây. Bộ độc quyền kích hoạt hiệu ứng Giáng Lâm Dị Mãng trói toàn bộ kẻ địch trúng đòn, bảo kê đồng minh vững chắc.",
        "defaultDamage": 11.75,
        "meta_role": "Khống Chế Đóng Băng • Bất Khuất • Trói Xà",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 105,
        "name": "Mukhyang (Mặc Hương)",
        "raw_name": "Mukhyang",
        "filename": "ally_105",
        "star": 8,
        "feature": "Giáp Sắt",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 20,
        "attack_speed": 50,
        "attack_len": 600,
        "ap_start": 20000,
        "ap_end": 300000,
        "hp_start": 1,
        "hp_end": 46,
        "nm_start": 5200,
        "nm_end": 10500,
        "innate_abilities": [
            "PUSH_IMM",
            "DIGNITY_IMM",
            "TIME_STOP_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [
            "TF_ATTACK_UPGRADE",
            "ARMOR",
            "INSTANT_KILL",
            "PVP_CHAR_SEAL",
            "PVP_HP_AP_UP",
            "PVP_TOWER_DAMAGE",
            "PVP_SCORE_UP"
        ],
        "has_exclusive_item": true,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch105.png",
        "tier": "TIER S+",
        "description": "VUA ĐẤU TRƯỜNG PVP! Giáp Sắt 46 hit kết hợp Trảm Sát tức tử 25% và Phong Ấn khóa skill tướng địch trong PVP. Bộ trang bị độc quyền tăng thêm 10% trảm sát và giảm 5s hồi Dấu Ấn Trúc Khí, biến Mặc Hương thành nỗi ác mộng đối kháng.",
        "defaultDamage": 15.42,
        "meta_role": "Đao Ma Trảm Sát 25% • Phong Ấn Tướng PVP",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 104,
        "name": "Ogong (Tôn Ngộ Không)",
        "raw_name": "Ogong",
        "filename": "ally_104",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 20,
        "attack_speed": 50,
        "attack_len": 500,
        "ap_start": 20000,
        "ap_end": 300000,
        "hp_start": 150000,
        "hp_end": 3000000,
        "nm_start": 5200,
        "nm_end": 10500,
        "innate_abilities": [
            "PUSH_IMM",
            "DIGNITY_IMM",
            "TIME_STOP_IMM",
            "INSTANT_KILL_IMM",
            "FREEZE_IMM",
            "SLOW_IMM",
            "BURN_IMM",
            "OSOK_IMM"
        ],
        "special_abilities": [
            "FORTITUDE",
            "PUSH",
            "PVP_TEAM_DAMAGE_REDUCTION",
            "PVP_HP_AP_UP",
            "PVP_TOWER_SHIELD",
            "PVP_SCORE_UP"
        ],
        "has_exclusive_item": true,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch104.png",
        "tier": "TIER S+",
        "description": "THẦN ĐẤU CHIẾN THẮNG PHẬT! AP 300,000, Bất Khuất, Đẩy Lùi 100% quân địch và dựng Khiên Thành PVP. Bộ 4 món độc quyền kích hoạt đòn đánh phụ và giảm 20% sát thương cho toàn phe đồng minh, trụ vững trước mọi đợt công thành.",
        "defaultDamage": 14.15,
        "meta_role": "Tề Thiên Đại Thánh • Đẩy Lùi • Khiên Trụ",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 103,
        "name": "Vermilion Bird",
        "raw_name": "Vermilion Bird",
        "filename": "ally_103",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 20,
        "attack_speed": 40,
        "attack_len": 800,
        "ap_start": 11250,
        "ap_end": 187500,
        "hp_start": 112500,
        "hp_end": 1875000,
        "nm_start": 5200,
        "nm_end": 10500,
        "innate_abilities": [
            "OSOK_IMM",
            "INSTANT_KILL_IMM"
        ],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch103.png",
        "tier": "TIER A",
        "description": "Chu Tước thần thú với AP 187,500, HP 1,875,000 cùng tầm đánh cực xa 800px. Liên tục rải bão lửa thiêu đốt diện rộng, dọn dẹp quái và công phá tuyến phòng thủ tầm xa hiệu quả.",
        "defaultDamage": 8.5,
        "meta_role": "Tứ Linh Hỏa Điểu • Bão Lửa Tầm Xa",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 102,
        "name": "Tortoise Warrior",
        "raw_name": "Tortoise Warrior",
        "filename": "ally_102",
        "star": 8,
        "feature": "Phòng Thủ",
        "attack_type": "Đánh Lan Liên Hoàn",
        "max_level": 90,
        "move_speed": 10,
        "attack_speed": 50,
        "attack_len": 150,
        "ap_start": 1,
        "ap_end": 1,
        "hp_start": 150000,
        "hp_end": 3000000,
        "nm_start": 5200,
        "nm_end": 10500,
        "innate_abilities": [
            "OSOK_IMM",
            "INSTANT_KILL_IMM"
        ],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch102.png",
        "tier": "TIER A",
        "description": "Huyền Vũ sở hữu lượng máu khổng lồ 3,000,000 HP cao nhất dàn Tứ Linh, làm bức tường thành vững chãi che chắn cho toàn bộ tướng xạ thủ và pháp sư phía sau.",
        "defaultDamage": 8.5,
        "meta_role": "Tứ Linh Thần Quy • Siêu Tanker 3 Triệu Máu",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 101,
        "name": "White Tiger",
        "raw_name": "White Tiger",
        "filename": "ally_101",
        "star": 8,
        "feature": "Tấn Công",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 20,
        "attack_speed": 40,
        "attack_len": 800,
        "ap_start": 20000,
        "ap_end": 300000,
        "hp_start": 150000,
        "hp_end": 1500000,
        "nm_start": 5200,
        "nm_end": 10500,
        "innate_abilities": [
            "OSOK_IMM",
            "INSTANT_KILL_IMM"
        ],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch101.png",
        "tier": "TIER A",
        "description": "Bạch Hổ sở hữu AP 300,000 cực mạnh kết hợp tầm đánh 800px, xé toạc mọi hàng ngũ giáp dày của địch từ khoảng cách xa với uy lực áp đảo.",
        "defaultDamage": 8.5,
        "meta_role": "Tứ Linh Bạch Hổ • Trọng Kích Tầm Xa",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 100,
        "name": "WarGod Thrue",
        "raw_name": "WarGod Thrue",
        "filename": "ally_100",
        "star": 8,
        "feature": "Đánh Lan Rộng",
        "attack_type": "Đánh Lan Liên Hoàn",
        "max_level": 90,
        "move_speed": 8,
        "attack_speed": 20,
        "attack_len": 350,
        "ap_start": 3402,
        "ap_end": 59535,
        "hp_start": 17010,
        "hp_end": 340200,
        "nm_start": 2000,
        "nm_end": 4500,
        "innate_abilities": [],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch100.png",
        "tier": "TIER A",
        "description": "WarGod Thrue với kỹ năng đánh lan liên hoàn tầm trung 350px, sát thương dồn dập và độ bền bỉ cao, thích hợp làm mũi nhọn tiên phong càn quét tiền tuyến.",
        "defaultDamage": 8.5,
        "meta_role": "Chiến Thần Thrue • Đánh Lan Liên Hoàn",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 95,
        "name": "Azure Dragon",
        "raw_name": "Azure Dragon",
        "filename": "ally_95",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 20,
        "attack_speed": 40,
        "attack_len": -210,
        "ap_start": 15000,
        "ap_end": 250000,
        "hp_start": 150000,
        "hp_end": 1500000,
        "nm_start": 5200,
        "nm_end": 10500,
        "innate_abilities": [
            "OSOK_IMM",
            "INSTANT_KILL_IMM"
        ],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch95.png",
        "tier": "TIER A",
        "description": "Thanh Long thần thú với 250,000 AP và 1,500,000 HP, tốc độ di chuyển 20 áp sát nhanh, phóng ra long khí đánh lan giải tỏa áp lực cho toàn đội.",
        "defaultDamage": 8.5,
        "meta_role": "Tứ Linh Thanh Long • Cận Chiến Uy Dũng",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 94,
        "name": "DJ Koo",
        "raw_name": "COW VIII",
        "filename": "ally_94",
        "star": 8,
        "feature": "Mục Tiêu",
        "attack_type": "Bắn Tỉa Chuẩn Xác",
        "max_level": 90,
        "move_speed": 6,
        "attack_speed": 40,
        "attack_len": -280,
        "ap_start": 3024,
        "ap_end": 45360,
        "hp_start": 1,
        "hp_end": 1,
        "nm_start": 2200,
        "nm_end": 2900,
        "innate_abilities": [],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch94.png",
        "tier": "TIER A",
        "description": "COW VIII chuyên xạ kích tầm xa với cơ chế bất tử theo thời gian, nhắm thẳng hỏa lực vào các công trình và thành trì đối phương với độ chính xác tuyệt đối.",
        "defaultDamage": 8.5,
        "meta_role": "Pháo Binh Hạng Nặng • Bắn Tỉa Thành",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 93,
        "name": "Summoner Jey",
        "raw_name": "JEY VIII",
        "filename": "ally_93",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 6,
        "attack_speed": 40,
        "attack_len": 1200,
        "ap_start": 1890,
        "ap_end": 47250,
        "hp_start": 18900,
        "hp_end": 283500,
        "nm_start": 2200,
        "nm_end": 2900,
        "innate_abilities": [],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch93.png",
        "tier": "TIER A",
        "description": "JEY VIII với tầm bắn cực đại 1,200px xa nhất phân khúc, liên tục bắn tỉa gây sát thương lan từ tận hậu phương, làm suy yếu kẻ địch trước khi chạm mặt.",
        "defaultDamage": 8.5,
        "meta_role": "Xạ Thủ Tầm Siêu Xa • Rỉa Máu Tiền Tuyến",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 92,
        "name": "Nine-tailed Fox Bensi",
        "raw_name": "BENSI VIII",
        "filename": "ally_92",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 2,
        "attack_speed": 20,
        "attack_len": 450,
        "ap_start": 4536,
        "ap_end": 45360,
        "hp_start": 19656,
        "hp_end": 393120,
        "nm_start": 1500,
        "nm_end": 1700,
        "innate_abilities": [],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch92.png",
        "tier": "TIER A",
        "description": "BENSI VIII sở hữu 393,120 HP và sát thương ổn định, đảm nhận vai trò chống chịu tiền tuyến ở các màn chơi chiến dịch trung cấp.",
        "defaultDamage": 8.5,
        "meta_role": "Đấu Sĩ Tiên Phong • Tấn Công Cận Chiến",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 91,
        "name": "High Devel Gingerman",
        "raw_name": "GINGERMAN VIII",
        "filename": "ally_91",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 6,
        "attack_speed": 20,
        "attack_len": 450,
        "ap_start": 2835,
        "ap_end": 49613,
        "hp_start": 18428,
        "hp_end": 368550,
        "nm_start": 1500,
        "nm_end": 1800,
        "innate_abilities": [],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch91.png",
        "tier": "TIER A",
        "description": "GINGERMAN VIII với tốc độ đánh nhanh (20), áp sát gây sát thương liên tục lên nhiều mục tiêu cùng lúc.",
        "defaultDamage": 8.5,
        "meta_role": "Kiếm Khách Tốc Đánh • Càn Quét Cơ Bản",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 90,
        "name": "Zeus Goldman",
        "raw_name": "GOLDMAN VIII",
        "filename": "ally_90",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 3,
        "attack_speed": 60,
        "attack_len": 600,
        "ap_start": 2930,
        "ap_end": 51267,
        "hp_start": 19042,
        "hp_end": 380835,
        "nm_start": 1400,
        "nm_end": 1800,
        "innate_abilities": [],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch90.png",
        "tier": "TIER A",
        "description": "GOLDMAN VIII sở hữu tầm đánh 600px và sát thương lan, là lựa chọn bền bỉ hỗ trợ đồng đội trong giai đoạn đầu xây dựng đội hình 8 sao.",
        "defaultDamage": 8.5,
        "meta_role": "Đấu Sĩ Hoàng Kim • Khống Chế Tầm Trung",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 89,
        "name": "Unicorn Ruby",
        "raw_name": "RUBY VIII",
        "filename": "ally_89",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 4,
        "attack_speed": 30,
        "attack_len": 280,
        "ap_start": 4253,
        "ap_end": 42525,
        "hp_start": 18428,
        "hp_end": 368550,
        "nm_start": 1400,
        "nm_end": 1700,
        "innate_abilities": [],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch89.png",
        "tier": "TIER A",
        "description": "RUBY VIII sở hữu 368,550 HP, giữ cự ly 280px hỗ trợ bọc lót tiền tuyến và gây sát thương diện rộng khi đối phương dồn ép.",
        "defaultDamage": 8.5,
        "meta_role": "Hỗ Trợ Bền Bỉ • Phản Kích Tiền Tuyến",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 88,
        "name": "Reaper Bebee",
        "raw_name": "BEBEE VIII",
        "filename": "ally_88",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Toàn Màn Hình",
        "max_level": 90,
        "move_speed": 6,
        "attack_speed": 50,
        "attack_len": 700,
        "ap_start": 2520,
        "ap_end": 44100,
        "hp_start": 11700,
        "hp_end": 234000,
        "nm_start": 1300,
        "nm_end": 1700,
        "innate_abilities": [],
        "special_abilities": [
            "INSTANT_KILL",
            "PUSH"
        ],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch88.png",
        "tier": "TIER A",
        "description": "BEBEE VIII sở hữu bộ đôi kỹ năng Trảm Sát tức tử và Đẩy Lùi diện rộng, tạo đột biến cao khi kích hoạt hiệu ứng hạ gục ngay mục tiêu chủ lực địch.",
        "defaultDamage": 8.5,
        "meta_role": "Sát Thủ Đẩy Lùi • Trảm Sát Tức Tử",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 87,
        "name": "Idol Lucy",
        "raw_name": "RUSY VIII",
        "filename": "ally_87",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 7,
        "attack_speed": 17,
        "attack_len": 680,
        "ap_start": 2835,
        "ap_end": 37800,
        "hp_start": 11340,
        "hp_end": 226800,
        "nm_start": 1400,
        "nm_end": 1600,
        "innate_abilities": [],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch87.png",
        "tier": "TIER A",
        "description": "RUSY VIII (Cung Thủ) với tốc độ xuất chiêu cực nhanh (17) và tầm bắn 680px, tạo làn mưa tên liên hồi cản bước tiến quân địch.",
        "defaultDamage": 8.5,
        "meta_role": "Cung Thủ Tốc Độ • Bắn Tỉa Liên Hoàn",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 86,
        "name": "Ice Queen Lucy",
        "raw_name": "RUSY VIII",
        "filename": "ally_86",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 9,
        "attack_speed": 30,
        "attack_len": 950,
        "ap_start": 4253,
        "ap_end": 56700,
        "hp_start": 17010,
        "hp_end": 340200,
        "nm_start": 1200,
        "nm_end": 1500,
        "innate_abilities": [
            "OSOK_IMM"
        ],
        "special_abilities": [
            "CUR_HP_DAMAGE"
        ],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch86.png",
        "tier": "TIER A",
        "description": "RUSY VIII (Kiếm Sĩ) tốc chạy nhanh (9) kết hợp đòn đánh Trảm Máu theo % HP hiện tại của mục tiêu, là quân bài hiệu quả khắc chế boss to lớn trong phân khúc 8 sao.",
        "defaultDamage": 8.5,
        "meta_role": "Kiếm Sĩ Trảm Máu % • Bứt Tốc Độ",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 85,
        "name": "Iron Paladin Khan",
        "raw_name": "KHAN VIII",
        "filename": "ally_85",
        "star": 8,
        "feature": "Phòng Thủ",
        "attack_type": "Cận Chiến / Đơn Mục Tiêu",
        "max_level": 90,
        "move_speed": 6,
        "attack_speed": 30,
        "attack_len": -175,
        "ap_start": 300,
        "ap_end": 3000,
        "hp_start": 63788,
        "hp_end": 1275750,
        "nm_start": 2000,
        "nm_end": 2000,
        "innate_abilities": [
            "OSOK_IMM"
        ],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch85.png",
        "tier": "TIER A",
        "description": "KHAN VIII sở hữu 1,275,750 HP cao nhất phân khúc cơ bản cùng nội tại Miễn Chết 1 Đòn (OSOK_IMM), bức tường kiên cố chặn đứng mọi đòn bộc phá chí mạng của kẻ địch.",
        "defaultDamage": 8.5,
        "meta_role": "Siêu Hộ Vệ 1.2 Triệu Máu • Miễn OSOK",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 84,
        "name": "Planet Smartie",
        "raw_name": "SMARTY VIII",
        "filename": "ally_84",
        "star": 8,
        "feature": "Đánh Lan",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 2,
        "attack_speed": 40,
        "attack_len": 875,
        "ap_start": 4253,
        "ap_end": 42525,
        "hp_start": 18428,
        "hp_end": 368550,
        "nm_start": 1400,
        "nm_end": 1700,
        "innate_abilities": [],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch84.png",
        "tier": "TIER A",
        "description": "SMARTY VIII với tầm đánh 875px, thả bão phép diện rộng từ xa hỗ trợ dọn lính và làm mềm đội hình đối phương.",
        "defaultDamage": 8.5,
        "meta_role": "Pháp Sư Tầm Xa • Công Kích Phép Thuật",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 83,
        "name": "Hyper Echo",
        "raw_name": "ECHO VIII",
        "filename": "ally_83",
        "star": 8,
        "feature": "Tốc Độ",
        "attack_type": "Cận Chiến / Đơn Mục Tiêu",
        "max_level": 90,
        "move_speed": 7,
        "attack_speed": 40,
        "attack_len": 1200,
        "ap_start": 1418,
        "ap_end": 28350,
        "hp_start": 14175,
        "hp_end": 255150,
        "nm_start": 1100,
        "nm_end": 1300,
        "innate_abilities": [],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch83.png",
        "tier": "TIER A",
        "description": "ECHO VIII tầm bắn siêu xa 1,200px, cơ động cao với tốc chạy 7, liên tục cấu rỉa máu các mục tiêu đơn lẻ từ ngoài tầm đáp trả của đối thủ.",
        "defaultDamage": 8.5,
        "meta_role": "Xạ Thủ Cơ Động • Bắn Tỉa Đơn Mục Tiêu",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    },
    {
        "id": 82,
        "name": "Dragon Knight Ace",
        "raw_name": "ACE VIII",
        "filename": "ally_82",
        "star": 8,
        "feature": "Tấn Công",
        "attack_type": "Đánh Lan Rộng",
        "max_level": 90,
        "move_speed": 6,
        "attack_speed": 20,
        "attack_len": 330,
        "ap_start": 2835,
        "ap_end": 49613,
        "hp_start": 14175,
        "hp_end": 283500,
        "nm_start": 1500,
        "nm_end": 1800,
        "innate_abilities": [],
        "special_abilities": [],
        "has_exclusive_item": false,
        "avatar": "http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch82.png",
        "tier": "TIER A",
        "description": "ACE VIII - Vị tướng biểu tượng của El Dorado với đòn kiếm lan rộng 330px, tốc đánh 20 ổn định, nền tảng cơ bản cho mọi đội hình 8 sao khởi đầu.",
        "defaultDamage": 8.5,
        "meta_role": "Chiến Binh Khởi Nguyên • Đánh Lan Cơ Bản",
        "multi_hit": "Đòn đánh đơn (1 Hit)",
        "multi_hit_count": [
            1
        ],
        "multi_hit_note": "Tấn công đơn kích thông thường."
    }
];

// Tương thích ngược với các code cũ đang dùng GAME_HEROES_104_PLUS
const GAME_HEROES_104_PLUS = ALL_CODEX_HEROES;
