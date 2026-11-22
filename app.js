/**
 * EL DORADO BENCHMARK & HERO CODEX ENGINE
 * Web Benchmark so sánh sát thương tướng & tra cứu game min (104+)
 * Chế độ phân quyền User / Admin & Popup chi tiết toàn diện
 */

const STORAGE_KEY = 'eldodict_benchmark_state_v2';
const ROLE_KEY = 'eldodict_current_role_v2';

// Quản lý Role (Mặc định là 'user' để an toàn, có thể chuyển sang 'admin')
let currentRole = localStorage.getItem(ROLE_KEY) || 'user';

// Dữ liệu mặc định ban đầu dựa trên bài test thực tế Cloud Garden 60s
const DEFAULT_STATE = {
    theme: 'gold',
    meta: {
        title: 'BXH SÁT THƯƠNG CLOUD GARDEN',
        badge: 'LIVE BENCHMARK',
        subtitle: 'THẦN NẠP 2026 - GIÁ THẦN LVL 90: 100$, LV110: 1000$',
        recordLabel: 'KỶ LỤC SÁT THƯƠNG 60S',
        recordScore: '18.813M ĐIỂM',
        footerLeft: 'Dữ liệu thực tế từ bài test Cloud Garden 60 giây • Cập nhật Meta 2026 (Càng nạp càng mạnh)',
        footerRight: 'TEST TIME: 60 GIÂY • CHẾ ĐỘ CLOUD GARDEN\nLV 110 - ITEM A ĐỘC QUYỀN - BUFF XUẤT QUÂN TỪ THỎ NGỌC\nXUẤT TRẬN 20 NHÂN VẬT'
    },
    heroes: [
        {
            id: 'hero_107',
            gameId: 107,
            name: 'Flame Cavalier',
            star: 8,
            tier: 'TIER S+',
            badge: 'TOP 1 META • MULTI-HIT • SET TĂNG DAME • DIỆT QUÁI HC',
            damage: 18.813, // Đơn vị: Triệu (Million)
            avatar: 'http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch107.png',
            desc: 'Multi-hit kết hợp set đồ tăng dame cực mất cân bằng, chạm mốc 18.813M điểm sau 60s. Đánh map rất tốt với khả năng đánh vài chục đòn 1 lần, 1 mình clear màn 300.'
        },
        {
            id: 'hero_115',
            gameId: 115,
            name: 'Lunar Rabbit',
            star: 8,
            tier: 'TIER S+',
            badge: 'TOP 2 • MULTI-HIT 15-25 HITS • GIẢM THỜI GIAN XUẤT QUÂN • GIÁP HC',
            damage: 16.216,
            avatar: 'http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch115.png',
            desc: 'Thỏ Chuppy với bộ skill multi-hit sát thương cực cao, điểm sáng lớn nhất là giảm thời gian xuất quân toàn đội giúp tràn ngập bản đồ liên tục.'
        },
        {
            id: 'hero_112',
            gameId: 112,
            name: 'Black Raven',
            star: 8,
            tier: 'TIER S',
            badge: 'TOP 3 • X2 ĐÒN ĐÁNH • TỐC CHẠY 30 • PHÁ TRỤ',
            damage: 11.295,
            avatar: 'http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch112.png',
            desc: 'Quạ đen đạt 11.295M điểm với skill x2 đòn đánh và dame đơn mục tiêu/phá trụ rất tốt, tốc độ di chuyển 30 lao thẳng vào đội hình đối thủ.'
        },
        {
            id: 'hero_106',
            gameId: 106,
            name: 'Spirit Serpent',
            star: 8,
            tier: 'PVP META',
            badge: 'OUT META TEST DAME • BUFF PVP • ATTACK BY %HP • BẤT KHUẤT',
            damage: 3.464,
            avatar: 'http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch106.png',
            desc: 'Đánh theo % máu và có Bất Khuất. Đã out meta test dame tốc độ nhưng vẫn giữ chỗ đứng vững vàng trong chế độ PvP đối kháng.'
        },
        {
            id: 'hero_105',
            gameId: 105,
            name: 'Mukhyang',
            star: 8,
            tier: 'PVP META',
            badge: 'OUT META TEST DAME • GIÁP HC • TRẢM SÁT 25% • PHONG ẤN TƯỚNG PVP',
            damage: 3.288,
            avatar: 'http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch105.png',
            desc: 'Mặc Hương với cơ chế giáp sắt và trảm sát 25%, phong ấn đối phương trong PVP cực kỳ khó chịu.'
        },
        {
            id: 'hero_104',
            gameId: 104,
            name: 'Ogong',
            star: 8,
            tier: 'PVP META',
            badge: 'OUT META TEST DAME • DAME TAY ỔN • BẤT KHUẤT • ĐẨY LÙI • KHIÊN TRỤ',
            damage: 2.896,
            avatar: 'http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch104.png',
            desc: 'Tề Thiên Đại Thánh với bộ kỹ năng bất khuất và đẩy lùi, buff khiên trụ đồng minh trong PVP.'
        }
    ],
    reviews: [
        {
            id: 'rev_1',
            tag: 'TOP 1 SÁT THƯƠNG 60S - Flame Cavalier (18.8M)',
            tier: 'TIER S+',
            tierColor: 'amber',
            text: 'Kỷ lục gia test dame Cloud Garden! Cơ chế <strong class="text-amber-300 font-black">Giáp Sắt 46 hit</strong> bất hoại kết hợp trọn bộ 4 món độc quyền Hồng Diễm kích hoạt tới <strong class="text-orange-400 font-extrabold">+5 đòn liên hoàn</strong> và buff 80% AP toàn đội. Một mình càn quét màn 300 cực kỳ nhẹ nhàng.'
        },
        {
            id: 'rev_2',
            tag: 'TOP 2 & 3 META - Thỏ Ngọc (16.2M) & Hắc Nha (11.3M)',
            tier: 'TIER S+',
            tierColor: 'pink',
            text: 'Thỏ Ngọc sở hữu chiêu <strong class="text-pink-300 font-bold">Nguyệt Ảnh Nhảy Vọt giảm thời gian xuất quân</strong> giúp tràn lính liên tục, Thiên Thạch nổ thêm 5 lần đạt 16.216M; Hắc Nha bứt tốc 30 tàng hình né đòn và phân thân x2 đạt 11.295M điểm chuyên phá trụ đối phương.'
        },
        {
            id: 'rev_3',
            tag: 'BẬC THẦY ĐẤU TRƯỜNG PVP - Linh Xà, Mặc Hương & Ngộ Không',
            tier: 'PVP META',
            tierColor: 'teal',
            text: 'Dù out meta test tốc độ sát thương nhưng thống trị tuyệt đối chế độ PvP: Mặc Hương với <strong class="text-emerald-300 font-bold">Trảm Sát 25% & Phong Ấn tướng</strong>; Linh Xà với <strong class="text-teal-300 font-bold">Bất Khuất & Trói Toàn Đội 5s</strong>; Ngộ Không buff khiên thành và đẩy lùi quân địch.'
        }
    ]
};

// Global App State
let appState = loadState();

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            return {
                ...DEFAULT_STATE,
                ...parsed,
                meta: { ...DEFAULT_STATE.meta, ...(parsed.meta || {}) },
                heroes: Array.isArray(parsed.heroes) && parsed.heroes.length > 0 ? parsed.heroes : DEFAULT_STATE.heroes,
                reviews: Array.isArray(parsed.reviews) && parsed.reviews.length > 0 ? parsed.reviews : DEFAULT_STATE.reviews
            };
        }
    } catch (e) {
        console.warn('Lỗi đọc localStorage:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
        console.warn('Lỗi ghi localStorage:', e);
    }
}

// =============================================================================
// 1. ROLE MANAGEMENT (USER / ADMIN)
// =============================================================================
function initRole() {
    applyRole(currentRole);
}

function applyRole(role) {
    currentRole = role;
    localStorage.setItem(ROLE_KEY, role);

    document.body.classList.remove('role-user', 'role-admin');
    document.body.classList.add(`role-${role}`);

    const badge = document.getElementById('role-indicator-badge');
    const toggleBtn = document.getElementById('role-toggle-btn');

    if (role === 'admin') {
        if (badge) {
            badge.innerHTML = `
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-emerald-300 font-extrabold text-[11px] uppercase tracking-wide">👑 ADMIN (QUẢN TRỊ)</span>
            `;
            badge.className = 'flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 rounded-xl shadow-lg shadow-emerald-500/10';
        }
        if (toggleBtn) {
            toggleBtn.innerHTML = `
                <svg class="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span>Về Chế Độ User</span>
            `;
            toggleBtn.title = 'Chuyển sang chế độ Người dùng (Chỉ xem & tra cứu)';
            toggleBtn.className = 'px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-600 transition flex items-center gap-1.5';
        }
    } else {
        if (badge) {
            badge.innerHTML = `
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                <span class="text-sky-300 font-extrabold text-[11px] uppercase tracking-wide">👤 USER (TRA CỨU & XEM)</span>
            `;
            badge.className = 'flex items-center gap-1.5 bg-sky-500/15 border border-sky-500/30 px-2.5 py-1 rounded-xl shadow-lg shadow-sky-500/10';
        }
        if (toggleBtn) {
            toggleBtn.innerHTML = `
                <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                <span>Mở Quyền Admin</span>
            `;
            toggleBtn.title = 'Bật quyền Quản trị viên để chỉnh sửa, thêm tướng, thêm review';
            toggleBtn.className = 'px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-black transition flex items-center gap-1.5 shadow-md shadow-amber-500/20';
        }
    }

    renderBenchmark();
}

function toggleRole() {
    if (currentRole === 'user') {
        applyRole('admin');
        showToast('👑 Đã kích hoạt quyền Admin! Bạn có thể thêm, sửa, xóa tướng và review.');
    } else {
        applyRole('user');
        showToast('👤 Đã chuyển về chế độ User (Chỉ xem và tra cứu như từ điển).');
    }
}

// =============================================================================
// 2. RENDER BENCHMARK BOARD
// =============================================================================
function renderBenchmark() {
    // 1. Sort heroes by damage descending
    appState.heroes.sort((a, b) => b.damage - a.damage);

    const topHero = appState.heroes[0];
    const topDamage = topHero ? topHero.damage : 1;

    // Update Top Record Score Header
    const recordEl = document.getElementById('meta-record-score');
    if (recordEl && topHero) {
        recordEl.textContent = `${topDamage.toFixed(3)}M ĐIỂM`;
    }

    // Render Left Heroes List
    const heroListEl = document.getElementById('benchmark-hero-list');
    const heroCountEl = document.getElementById('hero-count-label');
    if (heroCountEl) {
        heroCountEl.textContent = `BẢNG XẾP HẠNG SÁT THƯƠNG CHI TIẾT (${appState.heroes.length} TƯỚNG)`;
    }

    if (heroListEl) {
        heroListEl.innerHTML = '';
        appState.heroes.forEach((hero, index) => {
            const rank = index + 1;
            const pct = topDamage > 0 ? ((hero.damage / topDamage) * 100).toFixed(1) : '0';
            
            // Format styling based on rank
            let rowClass = 'rank-other-row';
            let medalClass = 'bg-slate-800 border border-slate-600/80 text-slate-300 text-lg';
            let barGrad = 'from-slate-500 to-sky-400/80';
            let scoreColor = 'text-slate-200';
            let pctColor = 'text-slate-400';
            let nameColor = 'text-slate-200';
            let glowShadow = '';

            if (rank === 1) {
                rowClass = 'rank-1-row';
                medalClass = 'bg-gradient-to-br from-amber-300 via-amber-500 to-red-600 text-slate-950 text-2xl font-black shadow-lg shadow-amber-500/30';
                barGrad = 'from-amber-300 via-orange-500 to-red-600';
                scoreColor = 'text-amber-300 font-extrabold';
                pctColor = 'text-amber-400 font-extrabold';
                nameColor = 'text-white font-black';
                glowShadow = 'shadow-[0_0_12px_rgba(245,158,11,0.85)]';
            } else if (rank === 2) {
                rowClass = 'rank-2-row';
                medalClass = 'bg-gradient-to-br from-pink-300 via-pink-500 to-rose-600 text-slate-950 text-2xl font-black shadow-lg shadow-pink-500/25';
                barGrad = 'from-pink-300 via-pink-500 to-purple-500';
                scoreColor = 'text-pink-300 font-extrabold';
                pctColor = 'text-pink-400 font-extrabold';
                nameColor = 'text-white font-black';
                glowShadow = 'shadow-[0_0_12px_rgba(236,72,153,0.75)]';
            } else if (rank === 3) {
                rowClass = 'rank-3-row';
                medalClass = 'bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-600 text-white text-2xl font-black shadow-lg shadow-purple-500/25';
                barGrad = 'from-purple-400 via-indigo-500 to-sky-400';
                scoreColor = 'text-purple-300 font-extrabold';
                pctColor = 'text-purple-400 font-extrabold';
                nameColor = 'text-white font-black';
                glowShadow = 'shadow-[0_0_12px_rgba(168,85,247,0.7)]';
            }

            const heroCard = document.createElement('div');
            heroCard.className = `hero-card ${rowClass} rounded-xl px-3.5 py-1.5 flex items-center gap-3`;
            // Click to view detail popup
            heroCard.onclick = () => showHeroDetail(hero.id, 'benchmark');
            heroCard.title = 'Bấm để xem popup chi tiết đầy đủ thông số và kỹ năng!';

            heroCard.innerHTML = `
                <!-- Rank Medal Number -->
                <div class="w-10 h-10 rounded-xl ${medalClass} font-gaming flex items-center justify-center shrink-0">
                    #${rank}
                </div>

                <!-- Hero Avatar -->
                <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0">
                    <img src="${hero.avatar || 'http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch104.png'}" alt="${hero.name}" class="w-full h-full object-cover" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(hero.name)}&background=1e293b&color=f8fafc&bold=true'">
                </div>

                <!-- Hero Info & Progress Bar -->
                <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-2 mb-1">
                        <div class="flex items-center gap-2 min-w-0">
                            <span class="text-[15.5px] ${nameColor} truncate">${hero.name}</span>
                            <span class="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] font-black shrink-0 border border-amber-500/30">
                                ${hero.star ? hero.star + '★' : '8★'}
                            </span>
                            <span class="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-bold uppercase tracking-wide truncate max-w-[260px]">
                                ${hero.badge || hero.tier || 'CHƯA PHÂN HẠNG'}
                            </span>
                            <span class="click-hint text-[9px] text-amber-400 font-semibold no-export hidden xl:inline">
                                🔍 Xem Chi Tiết
                            </span>
                        </div>
                        <div class="flex items-baseline gap-1.5 shrink-0">
                            <span class="font-gaming text-lg ${scoreColor}">${hero.damage.toFixed(3)}M</span>
                            <span class="text-[11px] font-semibold text-slate-400">Điểm</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2.5">
                        <div class="flex-1 h-2 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
                            <div class="h-full rounded-full bg-gradient-to-r ${barGrad} ${glowShadow}" style="width: ${pct}%;"></div>
                        </div>
                        <span class="font-gaming text-xs ${pctColor} w-11 text-right">${pct}%</span>
                    </div>
                </div>

                <!-- Action Buttons (Admin Only) -->
                <div class="hero-actions admin-only flex items-center gap-1 shrink-0 no-export">
                    <button onclick="event.stopPropagation(); openEditHeroModal('${hero.id}')" title="Chỉnh sửa tướng" class="p-1.5 rounded-lg bg-slate-800/90 hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </button>
                    <button onclick="event.stopPropagation(); deleteHero('${hero.id}')" title="Xóa tướng khỏi BXH" class="p-1.5 rounded-lg bg-slate-800/90 hover:bg-rose-600 hover:text-white text-slate-400 transition">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </div>
            `;
            heroListEl.appendChild(heroCard);
        });
    }

    // Render Right Review Cards
    renderReviewCards();

    // Adjust scale cleanly
    fitStage();
}

// Render Review Meta Cards
function renderReviewCards() {
    const container = document.getElementById('review-cards-list');
    if (!container) return;

    container.innerHTML = '';

    if (!appState.reviews || appState.reviews.length === 0) {
        container.innerHTML = '<div class="text-xs text-slate-400 p-4">Chưa có bài tóm tắt đánh giá meta nào.</div>';
        return;
    }

    appState.reviews.forEach((rev, idx) => {
        const cardEl = document.createElement('div');
        let borderClass = 'border-amber-400/45';
        let bgGrad = 'from-amber-500/15 via-slate-900/90 to-slate-950/95';
        let badgeBg = 'from-amber-400 to-orange-500 text-slate-950';

        if (rev.tierColor === 'pink') {
            borderClass = 'border-pink-400/45';
            bgGrad = 'from-pink-500/15 via-purple-900/20 to-slate-950/95';
            badgeBg = 'from-pink-500 to-purple-600 text-white';
        } else if (rev.tierColor === 'teal' || rev.tierColor === 'slate') {
            borderClass = 'border-slate-600/50';
            bgGrad = 'from-slate-800/75 via-slate-900/90 to-slate-950/95';
            badgeBg = 'from-slate-700 to-slate-800 text-teal-300 border border-slate-500/60';
        }

        cardEl.className = `relative group flex-1 rounded-2xl bg-gradient-to-br ${bgGrad} border ${borderClass} p-3.5 flex flex-col justify-center shadow-lg transition hover:border-amber-400/70`;
        cardEl.innerHTML = `
            <div class="flex items-center justify-between mb-1.5">
                <span class="px-2.5 py-0.5 rounded-md bg-gradient-to-r ${badgeBg} text-xs font-black uppercase tracking-wide">
                    ${rev.tag}
                </span>
                <span class="font-gaming text-sm font-extrabold text-${rev.tierColor === 'teal' ? 'teal-300' : (rev.tierColor === 'pink' ? 'pink-300' : 'amber-400')}">
                    ${rev.tier}
                </span>
            </div>
            <div class="text-[13.5px] text-slate-100 leading-relaxed font-medium">
                ${rev.text}
            </div>
            <!-- Action buttons (Admin only) -->
            <div class="admin-only absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition no-export flex items-center gap-1">
                <button onclick="openEditReviewModal('${rev.id}')" title="Sửa đánh giá" class="p-1 rounded bg-slate-800/90 hover:bg-amber-500 hover:text-slate-950 text-slate-300 text-xs">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </button>
                <button onclick="deleteReview('${rev.id}')" title="Xóa đánh giá" class="p-1 rounded bg-slate-800/90 hover:bg-rose-600 hover:text-white text-slate-300 text-xs">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        `;
        container.appendChild(cardEl);
    });
}

// =============================================================================
// 3. POPUP CHI TIẾT TƯỚNG (DETAIL MODAL) - XEM ĐẦY ĐỦ TAGS, CHỈ SỐ & KỸ NĂNG
// =============================================================================
let activeDetailTarget = null;

function showHeroDetail(identifier, source = 'benchmark') {
    let hero = null;
    let gameHero = null;

    const sourceList = (typeof ALL_CODEX_HEROES !== 'undefined' && ALL_CODEX_HEROES) ? ALL_CODEX_HEROES : GAME_HEROES_104_PLUS;

    if (source === 'benchmark') {
        hero = appState.heroes.find(h => h.id === identifier);
        if (hero) {
            // 1. Tìm theo gameId nếu có
            if (hero.gameId) {
                gameHero = sourceList.find(g => g.id === parseInt(hero.gameId));
            }
            // 2. Tìm theo tên hoặc raw_name linh hoạt
            if (!gameHero) {
                const hName = hero.name.toLowerCase().trim();
                gameHero = sourceList.find(g => {
                    const gName = g.name.toLowerCase().trim();
                    const gRaw = g.raw_name ? g.raw_name.toLowerCase().trim() : '';
                    return gName === hName || gRaw === hName || gName.startsWith(hName) || hName.startsWith(gRaw) || gName.includes(hName);
                });
            }
        }
    } else {
        // Source is codex, identifier is game ID (e.g. 104)
        const targetId = parseInt(identifier);
        gameHero = sourceList.find(g => g.id === targetId);
        if (gameHero) {
            hero = appState.heroes.find(h => {
                if (h.gameId && parseInt(h.gameId) === targetId) return true;
                const hName = h.name.toLowerCase().trim();
                const gName = gameHero.name.toLowerCase().trim();
                const gRaw = gameHero.raw_name ? gameHero.raw_name.toLowerCase().trim() : '';
                return hName === gName || hName === gRaw || gName.startsWith(hName);
            });
        }
    }

    if (!hero && !gameHero) return;

    activeDetailTarget = { hero, gameHero, source };

    const modal = document.getElementById('hero-detail-modal');
    if (!modal) return;

    // 1. Tên, Avatar, Sao, Danh hiệu
    const name = hero ? hero.name : gameHero.name;
    const star = hero ? (hero.star || 8) : gameHero.star;
    const tier = getHeroTier(gameHero || hero);
    const avatar = (hero && hero.avatar) ? hero.avatar : (gameHero ? gameHero.avatar : '');
    const title = gameHero ? gameHero.title : `${name} (Hệ Thần)`;
    const idInfo = gameHero ? `ID Ingame: ${gameHero.id} • ${gameHero.filename}` : 'Tướng Tuỳ Chỉnh';

    const avatarImgEl = document.getElementById('detail-hero-avatar');
    avatarImgEl.src = avatar;
    avatarImgEl.onerror = () => {
        avatarImgEl.onerror = null;
        if (gameHero && gameHero.id) {
            avatarImgEl.src = `http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch${gameHero.id}.png`;
        } else {
            avatarImgEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1e293b&color=f8fafc&bold=true`;
        }
    };
    document.getElementById('detail-hero-name').textContent = name;
    document.getElementById('detail-hero-star').textContent = `${star}★`;
    document.getElementById('detail-hero-title').textContent = title;
    document.getElementById('detail-hero-id').textContent = idInfo;
    const tierBadgeEl = document.getElementById('detail-hero-tier');
    tierBadgeEl.textContent = tier;
    if (tier === 'TIER S+') {
        tierBadgeEl.className = 'px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25';
    } else if (tier === 'TIER S') {
        tierBadgeEl.className = 'px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-purple-500/20';
    } else {
        tierBadgeEl.className = 'px-3 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider';
    }

    // 2. Điểm Sát Thương Benchmark (nếu có)
    const damageContainer = document.getElementById('detail-damage-container');
    if (hero) {
        damageContainer.classList.remove('hidden');
        document.getElementById('detail-hero-damage').textContent = `${hero.damage.toFixed(3)}M Điểm`;
        
        // Calculate rank & percentage
        const sorted = [...appState.heroes].sort((a, b) => b.damage - a.damage);
        const rankIdx = sorted.findIndex(h => h.id === hero.id) + 1;
        const topDmg = sorted[0] ? sorted[0].damage : 1;
        const pct = ((hero.damage / topDmg) * 100).toFixed(1);

        document.getElementById('detail-hero-rank').textContent = `Hạng #${rankIdx} • ${pct}% so với Top 1`;
        document.getElementById('detail-hero-bar').style.width = `${pct}%`;
    } else {
        damageContainer.classList.add('hidden');
    }

    // 3. Toàn bộ Tags / Huy hiệu (Tách thành từng badge riêng biệt, không bị cắt bớt)
    const tagsContainer = document.getElementById('detail-tags-container');
    tagsContainer.innerHTML = '';

    const rawTags = (hero && hero.badge) ? hero.badge : (gameHero ? `${gameHero.tier || 'THẦN'} • ${gameHero.feature} • ${gameHero.attack_type}` : '');
    const tagList = rawTags.split(/[•+,\/]/).map(t => t.trim()).filter(t => t.length > 0);

    if (tagList.length === 0) {
        tagsContainer.innerHTML = '<span class="text-xs text-slate-500 italic">Không có tag đặc biệt</span>';
    } else {
        tagList.forEach(tag => {
            const tagBadge = document.createElement('span');
            let colorClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
            if (tag.includes('TOP 1') || tag.includes('S+')) {
                colorClass = 'bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-300 border-amber-400 font-black';
            } else if (tag.includes('TOP 2') || tag.includes('MULTI-HIT') || tag.includes('GIẢM THỜI GIAN')) {
                colorClass = 'bg-pink-500/20 text-pink-300 border-pink-400/50 font-bold';
            } else if (tag.includes('TOP 3') || tag.includes('X2')) {
                colorClass = 'bg-purple-500/20 text-purple-300 border-purple-400/50 font-bold';
            } else if (tag.includes('OUT META') || tag.includes('PVP')) {
                colorClass = 'bg-teal-500/20 text-teal-300 border-teal-400/40 font-bold';
            }

            tagBadge.className = `px-2.5 py-1 rounded-lg text-xs border ${colorClass} inline-flex items-center gap-1 shadow-sm`;
            tagBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-current"></span> ${tag}`;
            tagsContainer.appendChild(tagBadge);
        });
    }

    // 4. Bảng thông số Ingame chi tiết (Game Min)
    const statsContainer = document.getElementById('detail-stats-container');
    if (gameHero) {
        statsContainer.classList.remove('hidden');
        document.getElementById('detail-stat-ap').textContent = `${gameHero.ap_start.toLocaleString()} ➔ ${gameHero.ap_end.toLocaleString()}`;
        document.getElementById('detail-stat-hp').textContent = gameHero.hp_end <= 100 ? `${gameHero.hp_end} Hit (Giáp Sắt Đặc Biệt)` : `${gameHero.hp_start.toLocaleString()} ➔ ${gameHero.hp_end.toLocaleString()}`;
        document.getElementById('detail-stat-feature').textContent = gameHero.feature;
        document.getElementById('detail-stat-type').textContent = gameHero.attack_type;
        document.getElementById('detail-stat-len').textContent = `${gameHero.attack_len} px`;
        document.getElementById('detail-stat-speed').textContent = `Đánh: ${gameHero.attack_speed} | Chạy: ${gameHero.move_speed}`;
        document.getElementById('detail-stat-nm').textContent = `${gameHero.nm_start.toLocaleString()} ➔ ${gameHero.nm_end.toLocaleString()}`;
        const multihitEl = document.getElementById('detail-stat-multihit');
        if (gameHero.multi_hit && gameHero.multi_hit !== 'Đòn đánh đơn (1 Hit)') {
            multihitEl.innerHTML = `
                <div class="flex flex-col">
                    <span class="font-gaming text-pink-400 font-black text-xs">${gameHero.multi_hit}</span>
                    ${gameHero.multi_hit_note ? `<span class="text-[10px] text-slate-400 font-normal leading-tight mt-0.5">${gameHero.multi_hit_note}</span>` : ''}
                </div>
            `;
        } else {
            multihitEl.textContent = 'Đòn đánh đơn (1 Hit)';
        }
    } else {
        statsContainer.classList.add('hidden');
    }

    
    // 4.5. HIỂN THỊ BỘ TRANG BỊ ĐỘC QUYỀN NẾU CÓ
    const exclContainer = document.getElementById('detail-exclusive-container');
    const exclGrid = document.getElementById('detail-exclusive-items-grid');
    const exclSetsList = document.getElementById('detail-exclusive-sets-list');

    if (exclContainer && exclGrid && exclSetsList) {
        let heroGameId = gameHero ? gameHero.id : (hero && hero.gameId ? hero.gameId : null);
        let foundSet = null;
        if (heroGameId && typeof EXCLUSIVE_ITEMS_DATA !== 'undefined') {
            foundSet = EXCLUSIVE_ITEMS_DATA.find(s => s.hero_id === heroGameId);
        }

        if (foundSet) {
            exclContainer.classList.remove('hidden');
            exclGrid.innerHTML = '';
            exclSetsList.innerHTML = '';

            // Render 4 items
            foundSet.items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cursor-pointer group/item bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-400 p-2 rounded-xl flex flex-col items-center text-center transition';
                itemDiv.onclick = () => openItemDetailModal(foundSet.hero_id, item.slot);
                const fallbackImg = `http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/${item.folder}/${item.filename}.png`;
                itemDiv.innerHTML = `
                    <div class="w-12 h-12 flex items-center justify-center my-1">
                        <img src="${item.img_big}" onerror="this.onerror=null; this.src='${fallbackImg}'" alt="${item.name}" class="max-w-full max-h-full object-contain filter drop-shadow group-hover/item:scale-110 transition">
                    </div>
                    <span class="text-[9px] text-slate-400 font-bold uppercase">${item.slot_name}</span>
                    <h5 class="text-[11px] font-bold text-white group-hover/item:text-amber-300 transition line-clamp-1">${item.name}</h5>
                    <span class="text-[10px] font-gaming text-amber-400 font-black mt-1">${item.option_val} ${item.option_type}</span>
                `;
                exclGrid.appendChild(itemDiv);
            });

            // Render 4 sets
            const effects = foundSet.set_effects;
            const setRows = [
                { num: '1', title: effects.set1.title, detail: effects.set1.detail },
                { num: '2', title: effects.set2.title, detail: effects.set2.detail },
                { num: '3', title: effects.set3.title, detail: effects.set3.detail },
                { num: '4★', title: effects.set4.title, detail: effects.set4.detail, isMax: true }
            ];

            setRows.forEach(row => {
                const rowDiv = document.createElement('div');
                rowDiv.className = `p-2 rounded-xl ${row.isMax ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-400/60' : 'bg-slate-900/80 border border-slate-800'} flex items-start gap-2`;
                rowDiv.innerHTML = `
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-gaming font-black ${row.isMax ? 'bg-amber-500 text-slate-950' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'} shrink-0">${row.num}</span>
                    <div class="flex-1 min-w-0">
                        <span class="text-[10px] font-black uppercase ${row.isMax ? 'text-amber-300' : 'text-slate-300'} font-gaming">${row.title}:</span>
                        <span class="text-[11px] text-slate-300 leading-tight block mt-0.5">${row.detail}</span>
                    </div>
                `;
                exclSetsList.appendChild(rowDiv);
            });
        } else {
            exclContainer.classList.add('hidden');
        }
    }

    // 5. Danh sách Kỹ năng Nội Tại & Đặc Biệt (kèm diễn giải tiếng Việt)
    const abilitiesContainer = document.getElementById('detail-abilities-container');
    abilitiesContainer.innerHTML = '';

    if (gameHero) {
        // Special Abilities
        if (gameHero.special_abilities && gameHero.special_abilities.length > 0) {
            const spTitle = document.createElement('div');
            spTitle.className = 'text-xs font-black uppercase text-amber-400 tracking-wider mb-2 flex items-center gap-1.5';
            spTitle.innerHTML = '⚡ KỸ NĂNG ĐẶC BIỆT, CÔNG & BUFF CHIẾN TRẬN (SPECIAL ABILITIES):';
            abilitiesContainer.appendChild(spTitle);

            const spGrid = document.createElement('div');
            spGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-2 mb-3.5';

            gameHero.special_abilities.forEach(key => {
                const info = SPECIAL_ABILITY_DESC[key] || { name: key, desc: 'Kỹ năng công kích, bổ trợ hoặc buff chiến thuật.', color: 'amber', icon: '⚡' };
                const icon = info.icon || '⚡';
                const item = document.createElement('div');
                item.className = `p-2.5 rounded-xl bg-slate-950/90 border border-${info.color}-500/40 hover:border-${info.color}-400/80 transition flex flex-col gap-1.5 shadow-sm`;
                item.innerHTML = `
                    <div class="flex items-center justify-between gap-1.5">
                        <span class="px-2 py-0.5 rounded text-[11px] font-black uppercase bg-${info.color}-500/20 text-${info.color}-300 border border-${info.color}-500/40 flex items-center gap-1">
                            <span>${icon}</span> ${info.name}
                        </span>
                        <span class="text-[9px] text-slate-500 font-mono">${key}</span>
                    </div>
                    <span class="text-xs text-slate-200 leading-snug font-medium pl-1">${info.desc}</span>
                `;
                spGrid.appendChild(item);
            });
            abilitiesContainer.appendChild(spGrid);
        }

        // Innate Abilities
        if (gameHero.innate_abilities && gameHero.innate_abilities.length > 0) {
            const inTitle = document.createElement('div');
            inTitle.className = 'text-xs font-black uppercase text-purple-400 tracking-wider mb-2 flex items-center gap-1.5';
            inTitle.innerHTML = '🛡️ NỘI TẠI MIỄN KHỐNG CHẾ & BẢO HỘ (INNATE IMMUNITIES):';
            abilitiesContainer.appendChild(inTitle);

            const inGrid = document.createElement('div');
            inGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-2';

            gameHero.innate_abilities.forEach(key => {
                const info = INNATE_ABILITY_DESC[key] || { name: key, desc: 'Kháng hiệu ứng bất lợi trên chiến trường.', color: 'emerald', icon: '🛡️' };
                const icon = info.icon || '🛡️';
                const item = document.createElement('div');
                item.className = `p-2.5 rounded-xl bg-slate-950/90 border border-${info.color}-500/40 hover:border-${info.color}-400/80 transition flex flex-col gap-1.5 shadow-sm`;
                item.innerHTML = `
                    <div class="flex items-center justify-between gap-1.5">
                        <span class="px-2 py-0.5 rounded text-[11px] font-black uppercase bg-${info.color}-500/20 text-${info.color}-300 border border-${info.color}-500/40 flex items-center gap-1">
                            <span>${icon}</span> ${info.name}
                        </span>
                        <span class="text-[9px] text-slate-500 font-mono">${key}</span>
                    </div>
                    <span class="text-xs text-slate-200 leading-snug font-medium pl-1">${info.desc}</span>
                `;
                inGrid.appendChild(item);
            });
            abilitiesContainer.appendChild(inGrid);
        }
    } else {
        abilitiesContainer.innerHTML = '<p class="text-xs text-slate-400 italic">Tướng tùy chỉnh từ người dùng — không có sẵn file nguyên bản trong client game.</p>';
    }

    // 6. Nhận xét & Đánh Giá Meta Gameplay Toàn Diện
    const descContainer = document.getElementById('detail-hero-desc');
    const heroMetaDesc = (hero && hero.desc) ? hero.desc : (gameHero ? gameHero.description : 'Chưa có bài phân tích chi tiết.');
    const heroMetaRole = (gameHero && gameHero.meta_role) ? gameHero.meta_role : (hero && hero.badge ? hero.badge : 'Đấu Sĩ Chủ Lực');
    const heroMetaTier = (hero && hero.tier) ? hero.tier : (gameHero && gameHero.tier ? gameHero.tier : 'TIER S');

    let tierBadgeBg = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    if (heroMetaTier.includes('S+')) {
        tierBadgeBg = 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black';
    } else if (heroMetaTier.includes('PVP')) {
        tierBadgeBg = 'bg-teal-500/20 text-teal-300 border-teal-500/40 font-bold';
    } else if (heroMetaTier.includes('A')) {
        tierBadgeBg = 'bg-slate-800 text-slate-300 border-slate-700 font-bold';
    }

    descContainer.innerHTML = `
        <div class="space-y-2">
            <!-- Header Meta Tag -->
            <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
                <div class="flex items-center gap-1.5">
                    <span class="text-xs font-bold text-slate-400">Định Vị Chiến Thuật:</span>
                    <span class="text-xs font-black text-amber-300">${heroMetaRole}</span>
                </div>
                <span class="px-2 py-0.5 rounded text-[10px] uppercase ${tierBadgeBg} shadow-sm">
                    ${heroMetaTier}
                </span>
            </div>

            <!-- Gameplay Analysis Text -->
            <div class="text-xs text-slate-200 leading-relaxed font-medium pt-1">
                ${heroMetaDesc}
            </div>
        </div>
    `;

    // 7. Footer Action Buttons (Admin controls)
    const adminActions = document.getElementById('detail-admin-actions');
    adminActions.innerHTML = '';

    if (currentRole === 'admin') {
        if (hero) {
            const editBtn = document.createElement('button');
            editBtn.className = 'px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition flex items-center gap-1.5 shadow-md shadow-amber-500/20';
            editBtn.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                Chỉnh Sửa Tướng Này
            `;
            editBtn.onclick = () => {
                closeHeroDetailModal();
                openEditHeroModal(hero.id);
            };
            adminActions.appendChild(editBtn);
        } else if (gameHero) {
            const addBtn = document.createElement('button');
            addBtn.className = 'px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-black transition flex items-center gap-1.5 shadow-md shadow-amber-500/20';
            addBtn.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                Đưa Vào BXH Benchmark
            `;
            addBtn.onclick = () => {
                closeHeroDetailModal();
                addCodexHeroToBenchmark(gameHero.id);
            };
            adminActions.appendChild(addBtn);
        }
    }

    modal.classList.remove('hidden');
}

function closeHeroDetailModal() {
    const modal = document.getElementById('hero-detail-modal');
    if (modal) modal.classList.add('hidden');
    activeDetailTarget = null;
}

// =============================================================================
// 4. HERO MANAGEMENT (ADD, EDIT, DELETE)
// =============================================================================
let currentEditingHeroId = null;

function openAddHeroModal(presetId = null) {
    if (currentRole !== 'admin') {
        showToast('⚠️ Bạn đang ở chế độ User (Chỉ xem). Hãy bật quyền Admin để chỉnh sửa!');
        return;
    }

    currentEditingHeroId = null;
    document.getElementById('modal-hero-title').textContent = '➕ Thêm Tướng Mới Vào BXH';
    
    // Clear inputs
    document.getElementById('hero-form-name').value = '';
    document.getElementById('hero-form-damage').value = '10.000';
    document.getElementById('hero-form-star').value = '8';
    document.getElementById('hero-form-tier').value = 'TIER S';
    document.getElementById('hero-form-badge').value = 'MULTI-HIT • CHIẾN THẦN TEST DAME';
    document.getElementById('hero-form-avatar').value = 'http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch104.png';
    document.getElementById('hero-form-desc').value = '';

    // If preset requested from Game Codex
    if (presetId) {
        const gameHero = GAME_HEROES_104_PLUS.find(h => h.id === presetId);
        if (gameHero) {
            document.getElementById('hero-form-name').value = gameHero.name;
            document.getElementById('hero-form-star').value = gameHero.star;
            document.getElementById('hero-form-tier').value = gameHero.tier || 'TIER S';
            document.getElementById('hero-form-badge').value = `${gameHero.tier || 'THẦN'} • ${gameHero.feature} • ${gameHero.attack_type}`;
            document.getElementById('hero-form-damage').value = (gameHero.defaultDamage || 5.0).toFixed(3);
            document.getElementById('hero-form-avatar').value = gameHero.avatar;
            document.getElementById('hero-form-desc').value = gameHero.description;
        }
    }

    document.getElementById('hero-modal').classList.remove('hidden');
}

function openEditHeroModal(heroId) {
    if (currentRole !== 'admin') {
        showToast('⚠️ Bạn đang ở chế độ User (Chỉ xem). Hãy bật quyền Admin để chỉnh sửa!');
        return;
    }

    const hero = appState.heroes.find(h => h.id === heroId);
    if (!hero) return;

    currentEditingHeroId = heroId;
    document.getElementById('modal-hero-title').textContent = `✏️ Chỉnh Sửa Tướng: ${hero.name}`;
    document.getElementById('hero-form-name').value = hero.name;
    document.getElementById('hero-form-damage').value = hero.damage;
    document.getElementById('hero-form-star').value = hero.star || 8;
    document.getElementById('hero-form-tier').value = hero.tier || 'TIER S';
    document.getElementById('hero-form-badge').value = hero.badge || '';
    document.getElementById('hero-form-avatar').value = hero.avatar || '';
    document.getElementById('hero-form-desc').value = hero.desc || '';

    document.getElementById('hero-modal').classList.remove('hidden');
}

function closeHeroModal() {
    document.getElementById('hero-modal').classList.add('hidden');
    currentEditingHeroId = null;
}

function saveHeroForm() {
    if (currentRole !== 'admin') {
        showToast('⚠️ Cần quyền Admin để lưu chỉnh sửa!');
        return;
    }

    const name = document.getElementById('hero-form-name').value.trim();
    const damage = parseFloat(document.getElementById('hero-form-damage').value) || 0;
    const star = parseInt(document.getElementById('hero-form-star').value) || 8;
    const tier = document.getElementById('hero-form-tier').value.trim();
    const badge = document.getElementById('hero-form-badge').value.trim();
    const avatar = document.getElementById('hero-form-avatar').value.trim();
    const desc = document.getElementById('hero-form-desc').value.trim();

    if (!name) {
        showToast('Vui lòng nhập tên tướng!');
        return;
    }

    // Xác định gameId liên kết từ preset hoặc tên tướng
    let gameId = null;
    const presetSelect = document.getElementById('hero-preset-select');
    if (presetSelect && presetSelect.value) {
        gameId = parseInt(presetSelect.value);
    } else {
        const sourceList = (typeof ALL_CODEX_HEROES !== 'undefined' && ALL_CODEX_HEROES) ? ALL_CODEX_HEROES : GAME_HEROES_104_PLUS;
        const hName = name.toLowerCase().trim();
        const found = sourceList.find(g => {
            const gName = g.name.toLowerCase().trim();
            const gRaw = g.raw_name ? g.raw_name.toLowerCase().trim() : '';
            return gName === hName || gRaw === hName || gName.startsWith(hName) || hName.startsWith(gRaw);
        });
        if (found) gameId = found.id;
    }

    if (currentEditingHeroId) {
        // Edit existing
        const idx = appState.heroes.findIndex(h => h.id === currentEditingHeroId);
        if (idx !== -1) {
            const oldHero = appState.heroes[idx];
            appState.heroes[idx] = {
                ...oldHero,
                gameId: gameId || oldHero.gameId || null,
                name,
                damage,
                star,
                tier,
                badge,
                avatar,
                desc
            };
            showToast(`Đã cập nhật tướng ${name}!`);
        }
    } else {
        // Add new
        const newHero = {
            id: 'hero_' + Date.now(),
            gameId: gameId || null,
            name,
            damage,
            star,
            tier,
            badge,
            avatar,
            desc
        };
        appState.heroes.push(newHero);
        showToast(`Đã thêm tướng ${name} vào BXH!`);
    }

    saveState();
    closeHeroModal();
    renderBenchmark();
}

function deleteHero(heroId) {
    if (currentRole !== 'admin') {
        showToast('⚠️ Cần quyền Admin để xóa tướng!');
        return;
    }

    const hero = appState.heroes.find(h => h.id === heroId);
    if (!hero) return;

    if (confirm(`Bạn có chắc chắn muốn xóa "${hero.name}" khỏi bảng xếp hạng benchmark?`)) {
        appState.heroes = appState.heroes.filter(h => h.id !== heroId);
        saveState();
        renderBenchmark();
        showToast(`Đã xóa tướng ${hero.name}!`);
    }
}

// Preset selection in modal
function selectPresetHero(gameId) {
    const gameHero = GAME_HEROES_104_PLUS.find(h => h.id === gameId);
    if (!gameHero) return;
    document.getElementById('hero-form-name').value = gameHero.name;
    document.getElementById('hero-form-star').value = gameHero.star;
    document.getElementById('hero-form-tier').value = gameHero.tier || 'TIER S';
    document.getElementById('hero-form-badge').value = `${gameHero.tier || 'THẦN'} • ${gameHero.feature} • ${gameHero.attack_type}`;
    document.getElementById('hero-form-damage').value = (gameHero.defaultDamage || 5.0).toFixed(3);
    document.getElementById('hero-form-avatar').value = gameHero.avatar;
    document.getElementById('hero-form-desc').value = gameHero.description;
}

// =============================================================================
// 5. REVIEW CARDS MANAGEMENT (ADMIN ONLY)
// =============================================================================
let currentEditingReviewId = null;

function openAddReviewModal() {
    if (currentRole !== 'admin') {
        showToast('⚠️ Bạn đang ở chế độ User (Chỉ xem). Hãy bật quyền Admin để chỉnh sửa!');
        return;
    }

    currentEditingReviewId = null;
    document.getElementById('modal-review-title').textContent = '➕ Thêm Card Đánh Giá Meta';
    document.getElementById('review-form-tag').value = '';
    document.getElementById('review-form-tier').value = 'TIER S';
    document.getElementById('review-form-color').value = 'amber';
    document.getElementById('review-form-text').value = '';
    document.getElementById('review-modal').classList.remove('hidden');
}

function openEditReviewModal(revId) {
    if (currentRole !== 'admin') {
        showToast('⚠️ Bạn đang ở chế độ User (Chỉ xem). Hãy bật quyền Admin để chỉnh sửa!');
        return;
    }

    const rev = appState.reviews.find(r => r.id === revId);
    if (!rev) return;

    currentEditingReviewId = revId;
    document.getElementById('modal-review-title').textContent = '✏️ Chỉnh Sửa Đánh Giá Meta';
    document.getElementById('review-form-tag').value = rev.tag;
    document.getElementById('review-form-tier').value = rev.tier;
    document.getElementById('review-form-color').value = rev.tierColor || 'amber';
    document.getElementById('review-form-text').value = rev.text;
    document.getElementById('review-modal').classList.remove('hidden');
}

function closeReviewModal() {
    document.getElementById('review-modal').classList.add('hidden');
    currentEditingReviewId = null;
}

function saveReviewForm() {
    if (currentRole !== 'admin') {
        showToast('⚠️ Cần quyền Admin để lưu!');
        return;
    }

    const tag = document.getElementById('review-form-tag').value.trim();
    const tier = document.getElementById('review-form-tier').value.trim();
    const tierColor = document.getElementById('review-form-color').value;
    const text = document.getElementById('review-form-text').value.trim();

    if (!tag || !text) {
        showToast('Vui lòng nhập đầy đủ tiêu đề và nội dung đánh giá!');
        return;
    }

    if (currentEditingReviewId) {
        const idx = appState.reviews.findIndex(r => r.id === currentEditingReviewId);
        if (idx !== -1) {
            appState.reviews[idx] = { ...appState.reviews[idx], tag, tier, tierColor, text };
            showToast('Đã cập nhật đánh giá Meta!');
        }
    } else {
        appState.reviews.push({
            id: 'rev_' + Date.now(),
            tag,
            tier,
            tierColor,
            text
        });
        showToast('Đã thêm card đánh giá Meta mới!');
    }

    saveState();
    closeReviewModal();
    renderBenchmark();
}

function deleteReview(revId) {
    if (currentRole !== 'admin') {
        showToast('⚠️ Cần quyền Admin để xóa!');
        return;
    }

    if (confirm('Bạn có muốn xóa card đánh giá này không?')) {
        appState.reviews = appState.reviews.filter(r => r.id !== revId);
        saveState();
        renderBenchmark();
        showToast('Đã xóa card đánh giá!');
    }
}

// =============================================================================
// 6. GAME HERO CODEX (TRA CỨU TƯỚNG 104+)
// =============================================================================
let codexFilter = 'all';
// EXCLUSIVE ITEMS FILTER
let exclusiveFilter = 'all';

let codexSearchQuery = '';


/**
 * RENDER TAB TRANG BỊ ĐỘC QUYỀN (EXCLUSIVE SETS & SET ABILITIES)
 */
function renderExclusiveSets() {
    const container = document.getElementById('exclusive-sets-container');
    if (!container) return;

    if (typeof EXCLUSIVE_ITEMS_DATA === 'undefined' || !EXCLUSIVE_ITEMS_DATA || EXCLUSIVE_ITEMS_DATA.length === 0) {
        container.innerHTML = '<div class="p-8 text-center text-slate-400">Không tìm thấy dữ liệu trang bị độc quyền.</div>';
        return;
    }

    const filtered = EXCLUSIVE_ITEMS_DATA.filter(set => {
        if (exclusiveFilter === 'all') return true;
        return set.hero_id === parseInt(exclusiveFilter);
    });

    container.innerHTML = '';

    filtered.forEach(set => {
        const setCard = document.createElement('div');
        setCard.className = 'bg-slate-950/90 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl transition hover:border-amber-400';

        // 4 Món items HTML
        let itemsHtml = '';
        set.items.forEach(item => {
            const fallbackBig = `http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/${item.folder}/${item.filename}.png`;
            itemsHtml += `
                <div onclick="openItemDetailModal(${set.hero_id}, '${item.slot}')" class="cursor-pointer group/item bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-400/80 p-3.5 rounded-2xl transition flex flex-col items-center text-center relative overflow-hidden shadow-lg">
                    <!-- Glow & Badge -->
                    <div class="absolute top-2 left-2 flex items-center gap-1">
                        <span class="px-2 py-0.5 rounded text-[9px] font-black uppercase bg-amber-500/25 text-amber-300 border border-amber-400/40">BẬC A</span>
                    </div>
                    <div class="absolute top-2 right-2 text-slate-400 group-hover/item:text-amber-300 transition text-xs">
                        🔍
                    </div>

                    <!-- Item Image -->
                    <div class="w-20 h-20 my-2 flex items-center justify-center relative">
                        <img src="${item.img_big}" 
                             onerror="this.onerror=null; this.src='${fallbackBig}'; this.onerror=()=>this.src='${item.img_sm}'" 
                             alt="${item.name}" 
                             class="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] group-hover/item:scale-110 transition transform">
                    </div>

                    <!-- Item Slot & Name -->
                    <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">${item.slot_name}</span>
                    <h4 class="text-xs font-bold text-white group-hover/item:text-amber-300 transition line-clamp-1 mt-0.5">${item.name}</h4>
                    <span class="text-[10px] text-slate-500 italic mb-2">${item.raw_name}</span>

                    <!-- Option Tag -->
                    <div class="mt-auto w-full py-1 px-2 rounded-xl bg-slate-950 border border-amber-500/30 flex items-center justify-between">
                        <span class="text-[10px] font-bold text-slate-400">${item.option_type}:</span>
                        <span class="text-xs font-gaming font-black text-amber-400">${item.option_val}</span>
                    </div>
                </div>
            `;
        });

        // 4 Mốc Set Effect HTML
        const effects = set.set_effects;
        const setEffectsHtml = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <!-- Set 1 -->
                <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <div class="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-gaming font-black text-xs shrink-0">
                        1
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-0.5">
                            <span class="text-xs font-black text-amber-300 font-gaming uppercase">${effects.set1.title}</span>
                            <span class="text-[10px] font-bold text-slate-400">1 Món</span>
                        </div>
                        <p class="text-xs text-slate-200 leading-snug">${effects.set1.detail}</p>
                    </div>
                </div>

                <!-- Set 2 -->
                <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <div class="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-gaming font-black text-xs shrink-0">
                        2
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-0.5">
                            <span class="text-xs font-black text-amber-300 font-gaming uppercase">${effects.set2.title}</span>
                            <span class="text-[10px] font-bold text-slate-400">2 Món</span>
                        </div>
                        <p class="text-xs text-slate-200 leading-snug">${effects.set2.detail}</p>
                    </div>
                </div>

                <!-- Set 3 -->
                <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <div class="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-gaming font-black text-xs shrink-0">
                        3
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-0.5">
                            <span class="text-xs font-black text-amber-300 font-gaming uppercase">${effects.set3.title}</span>
                            <span class="text-[10px] font-bold text-slate-400">3 Món</span>
                        </div>
                        <p class="text-xs text-slate-200 leading-snug">${effects.set3.detail}</p>
                    </div>
                </div>

                <!-- Set 4 - MAX SET -->
                <div class="p-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-slate-900 border border-amber-400 flex items-start gap-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-slate-950 font-gaming font-black text-xs shrink-0 shadow-md">
                        4★
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-0.5">
                            <span class="text-xs font-black text-amber-300 font-gaming uppercase">${effects.set4.title}</span>
                            <span class="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-black uppercase">Trọn Bộ 4 Món</span>
                        </div>
                        <p class="text-xs text-amber-100 font-medium leading-snug">${effects.set4.detail}</p>
                    </div>
                </div>
            </div>
        `;

        setCard.innerHTML = `
            <!-- Card Header: Banner & Hero Info -->
            <div class="relative bg-gradient-to-b from-slate-900 to-slate-950 p-6 border-b border-slate-800">
                <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                    <div class="flex items-center gap-4">
                        <div class="w-20 h-20 rounded-2xl overflow-hidden bg-slate-950 border-2 border-amber-400 shadow-xl shadow-amber-500/20 shrink-0">
                            <img src="${set.avatar_url}" 
                                 onerror="this.onerror=null; this.src='http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch${set.hero_id}.png'" 
                                 alt="${set.hero_name}" 
                                 class="w-full h-full object-cover">
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <h3 class="text-2xl font-black text-white font-gaming tracking-wide">${set.hero_name}</h3>
                                <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-extrabold">BẬC A EXCLUSIVE</span>
                            </div>
                            <p class="text-sm text-amber-300 font-bold mt-0.5">${set.hero_title}</p>
                            <p class="text-xs text-slate-400 mt-1">Mã Tướng: <strong>#${set.hero_id}</strong> • Bộ 4 Món: Nón, Vũ Khí, Giáp, Giày</p>
                        </div>
                    </div>

                    <!-- Actions & Banner preview -->
                    <div class="flex items-center gap-3">
                        <button onclick="showHeroDetail(${set.hero_id}, 'codex')" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition flex items-center gap-2">
                            <span>📖 Xem Chỉ Số Tướng</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Card Body: 4 Items Showcase -->
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <h4 class="text-xs font-black uppercase tracking-wider text-amber-400 font-gaming flex items-center gap-2">
                        <span>⚔️ 4 MÓN TRANG BỊ ĐỘC QUYỀN (CLICK ĐỂ PHÓNG TO):</span>
                    </h4>
                    <span class="text-xs text-slate-400 italic">Kích vào bất kỳ trang bị nào để xem thông số và mô tả chi tiết</span>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    ${itemsHtml}
                </div>

                <!-- Set Ability Progression Header -->
                <div class="pt-4 border-t border-slate-800/80">
                    <div class="flex items-center justify-between mb-3">
                        <h4 class="text-xs font-black uppercase tracking-wider text-amber-300 font-gaming flex items-center gap-2">
                            <span>⭐ HIỆU ỨNG KÍCH HOẠT THEO MỐC (SET ABILITY):</span>
                        </h4>
                        <span class="text-xs text-amber-400 font-bold">Kích hoạt tự động khi trang bị đủ số món</span>
                    </div>

                    ${setEffectsHtml}
                </div>
            </div>
        `;

        container.appendChild(setCard);
    });
}

function filterExclusiveSets(filterKey, btnEl) {
    exclusiveFilter = filterKey;
    document.querySelectorAll('.exclusive-filter-btn').forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-950');
        b.classList.add('bg-slate-800', 'text-slate-300');
    });
    if (btnEl) {
        btnEl.classList.remove('bg-slate-800', 'text-slate-300');
        btnEl.classList.add('bg-amber-500', 'text-slate-950');
    }
    const select = document.getElementById('exclusive-hero-filter');
    if (select) select.value = filterKey;
    renderExclusiveSets();
}

function filterExclusiveHero(heroId) {
    exclusiveFilter = heroId;
    document.querySelectorAll('.exclusive-filter-btn').forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-950');
        b.classList.add('bg-slate-800', 'text-slate-300');
    });
    renderExclusiveSets();
}

/**
 * MODAL XEM PHÓNG TO CHI TIẾT TRANG BỊ ĐỘC QUYỀN
 */
function openItemDetailModal(heroId, slot) {
    if (typeof EXCLUSIVE_ITEMS_DATA === 'undefined') return;
    const targetId = parseInt(heroId);
    const heroSet = EXCLUSIVE_ITEMS_DATA.find(s => s.hero_id === targetId);
    if (!heroSet) return;
    const item = heroSet.items.find(it => it.slot === slot);
    if (!item) return;

    const modal = document.getElementById('item-detail-modal');
    if (!modal) return;

    const slotIcons = {
        'casque': '👑',
        'weapon': '⚔️',
        'armor': '🛡️',
        'shoes': '👟'
    };

    document.getElementById('item-modal-slot-icon').textContent = slotIcons[slot] || '🛡️';
    document.getElementById('item-modal-name').textContent = item.name;
    document.getElementById('item-modal-raw-name').textContent = `${item.raw_name} (File: ${item.filename})`;
    
    const fallbackBig = `http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/item2/${item.folder}/${item.filename}.png`;
    const imgEl = document.getElementById('item-modal-image');
    imgEl.src = item.img_big;
    imgEl.onerror = () => {
        imgEl.onerror = null;
        imgEl.src = fallbackBig;
    };

    document.getElementById('item-modal-slot').textContent = `${item.slot_name} • BẬC A`;
    document.getElementById('item-modal-option').textContent = `${item.option_name}: ${item.option_val}`;
    document.getElementById('item-modal-desc').textContent = item.desc;
    document.getElementById('item-modal-hero').textContent = heroSet.hero_name;

    modal.classList.remove('hidden');
}

function closeItemDetailModal() {
    const modal = document.getElementById('item-detail-modal');
    if (modal) modal.classList.add('hidden');
}

// Helper xác định Tier chuẩn cho tướng
function getHeroTier(hero) {
    if (!hero) return 'TIER A';
    const id = parseInt(hero.id || hero.gameId || 0);
    const star = parseInt(hero.star || 8);
    const isExcl = hero.has_exclusive_item || [104, 105, 106, 107, 112, 115].includes(id);

    if (isExcl) return 'TIER S+'; // 6 thần nạp
    if (star >= 9) return 'TIER S';  // 9 sao
    return 'TIER A';                 // 8 sao thường
}

function renderCodex() {
    const grid = document.getElementById('codex-grid');
    if (!grid) return;

    const sourceData = (typeof ALL_CODEX_HEROES !== 'undefined' && ALL_CODEX_HEROES) ? ALL_CODEX_HEROES : GAME_HEROES_104_PLUS;

    const filtered = sourceData.filter(hero => {
        // Star / role filter
        if (codexFilter === '8star' && hero.star !== 8) return false;
        if (codexFilter === '9star' && hero.star !== 9) return false;
        if (codexFilter === 'exclusive' && !hero.has_exclusive_item) return false;
        
        // Kiểm tra hệ Giáp Sắt: có chữ 'Giáp' trong feature, hoặc có ability 'ARMOR' trong special/innate, hoặc HP <= 100 (Hit Armor)
        const hasArmorAbility = (hero.special_abilities && hero.special_abilities.includes('ARMOR')) || 
                                (hero.innate_abilities && hero.innate_abilities.includes('ARMOR')) ||
                                (hero.feature && hero.feature.includes('Giáp')) ||
                                hero.hp_end <= 100;
        if (codexFilter === 'armor' && !hasArmorAbility) return false;
        if (codexFilter === 'wide' && !hero.attack_type.includes('Lan') && !hero.feature.includes('Lan')) return false;

        // Search text (tìm theo Tên tiếng Việt, Tên gốc tiếng Anh, Mã ID, Kỹ năng)
        if (codexSearchQuery) {
            const q = codexSearchQuery.toLowerCase().trim();
            const matchName = hero.name.toLowerCase().includes(q);
            const matchRawName = hero.raw_name ? hero.raw_name.toLowerCase().includes(q) : false;
            const matchId = hero.id.toString().includes(q);
            const matchSpecial = hero.special_abilities ? hero.special_abilities.some(s => s.toLowerCase().includes(q)) : false;
            const matchInnate = hero.innate_abilities ? hero.innate_abilities.some(s => s.toLowerCase().includes(q)) : false;
            return matchName || matchRawName || matchId || matchSpecial || matchInnate;
        }

        return true;
    });

    grid.innerHTML = '';

    // Sắp xếp ID (co_ch) từ cao hơn về thấp hơn
    filtered.sort((a, b) => b.id - a.id);

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-slate-500">
                <svg class="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p class="text-sm font-bold">Không tìm thấy vị tướng nào phù hợp với bộ lọc!</p>
            </div>
        `;
        return;
    }

    filtered.forEach(hero => {
        const card = document.createElement('div');
        card.className = 'group bg-slate-950/80 border border-slate-800 hover:border-amber-400/80 rounded-2xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between cursor-pointer';
        card.onclick = () => showHeroDetail(hero.id, 'codex');

        // Badges HTML
        let innateHtml = '';
        if (hero.innate_abilities && hero.innate_abilities.length > 0) {
            hero.innate_abilities.slice(0, 4).forEach(k => {
                const info = INNATE_ABILITY_DESC[k] || { name: k, color: 'purple' };
                innateHtml += `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-${info.color}-500/20 text-${info.color}-300 border border-${info.color}-500/30">${info.name}</span>`;
            });
            if (hero.innate_abilities.length > 4) {
                innateHtml += `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400">+${hero.innate_abilities.length - 4}</span>`;
            }
        }

        let specialHtml = '';
        if (hero.special_abilities && hero.special_abilities.length > 0) {
            hero.special_abilities.slice(0, 3).forEach(k => {
                const info = SPECIAL_ABILITY_DESC[k] || { name: k, color: 'amber' };
                specialHtml += `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-${info.color}-500/20 text-${info.color}-300 border border-${info.color}-500/30">${info.name}</span>`;
            });
            if (hero.special_abilities.length > 3) {
                specialHtml += `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400">+${hero.special_abilities.length - 3}</span>`;
            }
        }

        const isArmor = hero.hp_end <= 100;
        const hpDisplay = isArmor ? `${hero.hp_end} Hit (Giáp Sắt)` : hero.hp_end.toLocaleString();
        const avatarUrl = `http://103.143.208.187/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch${hero.id}.png`;
        const fallbackAvatar = `http://103.143.208.18:8080/busidol_traffic/ELDORADO/ELDORADO_LG_traffic/image/ui/0_common/co_ch${hero.id}.png`;

        // Exclusive Item Badge
        let exclusiveBadge = '';
        if (hero.has_exclusive_item) {
            exclusiveBadge = `<span class="px-2 py-0.5 rounded bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-300 text-[10px] font-black border border-amber-400/50 shadow-sm flex items-center gap-1">🛡️ Set 4 Món</span>`;
        }

        card.innerHTML = `
            <div>
                <!-- Top Row: Avatar & Basic Info -->
                <div class="flex items-center gap-3.5 mb-3.5">
                    <div class="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-900 border border-amber-500/40 shrink-0 group-hover:border-amber-400 transition">
                        <img src="${avatarUrl}" onerror="this.onerror=null; this.src='${fallbackAvatar}'" alt="${hero.name}" class="w-full h-full object-cover">
                        <span class="absolute bottom-0 inset-x-0 bg-slate-950/80 text-[10px] text-amber-300 font-black text-center">${hero.star}★</span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between gap-1">
                            <h3 class="text-base font-black text-white font-gaming tracking-wide truncate group-hover:text-amber-400 transition">${hero.name}</h3>
                            ${(() => {
                            const t = getHeroTier(hero);
                            let tClass = 'bg-slate-800 text-slate-300 border border-slate-700';
                            if (t === 'TIER S+') tClass = 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-slate-950 shadow-md font-black';
                            else if (t === 'TIER S') tClass = 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-extrabold shadow-sm';
                            return `<span class="text-[10px] px-2.5 py-0.5 rounded-full ${tClass} uppercase shrink-0 tracking-wider">${t}</span>`;
                        })()}
                        </div>
                        <div class="flex items-center gap-2 mt-0.5">
                            <p class="text-[11px] text-amber-300 font-bold truncate">${hero.feature}</p>
                            ${exclusiveBadge}
                        </div>
                        <p class="text-[10px] text-slate-400">ID: #${hero.id} • ${hero.attack_type}</p>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80 mb-3 text-[11px]">
                    <div>
                        <span class="text-slate-400 block text-[9px] uppercase font-bold">Công Kích (AP)</span>
                        <span class="font-gaming font-black text-amber-400">${hero.ap_end.toLocaleString()}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 block text-[9px] uppercase font-bold">Sinh Lực (HP)</span>
                        <span class="font-gaming font-black ${isArmor ? 'text-amber-300' : 'text-rose-400'}">${hpDisplay}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 block text-[9px] uppercase font-bold">Tầm Đánh</span>
                        <span class="text-slate-200 font-bold">${hero.attack_len} px</span>
                    </div>
                    <div>
                        <span class="text-slate-400 block text-[9px] uppercase font-bold">Tốc Đánh / Chạy</span>
                        <span class="text-slate-200 font-bold">${hero.attack_speed} / ${hero.move_speed}</span>
                    </div>
                </div>

                <!-- Abilities tags -->
                <div class="space-y-1.5 mb-2">
                    ${specialHtml ? `<div class="flex flex-wrap gap-1">${specialHtml}</div>` : ''}
                    ${innateHtml ? `<div class="flex flex-wrap gap-1">${innateHtml}</div>` : ''}
                </div>
            </div>

            <!-- Footer Card Action -->
            <div class="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-amber-300 transition">
                <span class="font-medium">Xem chi tiết ${hero.has_exclusive_item ? '& Set Trang Bị' : 'chỉ số'}</span>
                <span class="text-amber-400 font-bold group-hover:translate-x-1 transition-transform">➔</span>
            </div>
        `;

        grid.appendChild(card);
    });
}

function filterCodex(filterType, btnEl) {
    codexFilter = filterType;
    document.querySelectorAll('.codex-filter-btn').forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-950');
        b.classList.add('bg-slate-800', 'text-slate-300');
    });
    btnEl.classList.remove('bg-slate-800', 'text-slate-300');
    btnEl.classList.add('bg-amber-500', 'text-slate-950');
    renderCodex();
}

function searchCodex(query) {
    codexSearchQuery = query;
    renderCodex();
}

function addCodexHeroToBenchmark(gameId) {
    if (currentRole !== 'admin') {
        showToast('⚠️ Bạn đang ở chế độ User. Hãy chuyển sang quyền Admin để thêm tướng vào BXH!');
        return;
    }
    // Switch to benchmark tab and open add hero modal with preset
    switchTab('benchmark');
    openAddHeroModal(gameId);
}

// =============================================================================
// 7. STAGE SCALING (16:9 LOCKED AUTOSCALE)
// =============================================================================
function fitStage() {
    const wrapper = document.getElementById('stage-wrapper');
    const card = document.getElementById('capture-area');
    if (!wrapper || !card) return;

    const availW = wrapper.clientWidth - 20;
    const availH = wrapper.clientHeight - 20;

    const scaleX = availW / 1280;
    const scaleY = availH / 720;
    const scale = Math.min(scaleX, scaleY, 1.25);

    card.style.transform = `scale(${Math.max(scale, 0.4)})`;
}

window.addEventListener('resize', fitStage);
window.addEventListener('load', () => {
    initRole();
    fitStage();
    renderBenchmark();
    renderCodex();
    populatePresetSelect();
});

// Keydown ESC to close detail popup
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeHeroDetailModal();
        closeItemDetailModal();
        closeHeroModal();
        closeReviewModal();
    }
});

// Click outside modal content to close (overlay click)
document.addEventListener('DOMContentLoaded', () => {
    const overlays = ['hero-detail-modal', 'item-detail-modal', 'hero-modal', 'review-modal'];
    overlays.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', (e) => {
                if (e.target === el) {
                    if (id === 'hero-detail-modal') closeHeroDetailModal();
                    else if (id === 'item-detail-modal') closeItemDetailModal();
                    else if (id === 'hero-modal') closeHeroModal();
                    else if (id === 'review-modal') closeReviewModal();
                }
            });
        }
    });
});

// =============================================================================
// 8. EXPORT EXACT 1920x1080 FULL HD PNG (NO CROP NEEDED)
// =============================================================================
async function exportImage(transparentBg = false) {
    const card = document.getElementById('capture-area');
    if (!card) return;

    // Blur active elements
    if (document.activeElement) document.activeElement.blur();
    window.getSelection().removeAllRanges();

    const prevTransform = card.style.transform;
    const prevRadius = card.style.borderRadius;

    document.body.classList.add('exporting');
    card.style.transform = 'scale(1)';
    card.style.borderRadius = '0px';

    if (transparentBg) {
        card.classList.add('transparent-bg');
    }

    try {
        showToast('Đang kết xuất ảnh PNG chuẩn 1920×1080 Full HD...');
        
        const canvas = await html2canvas(card, {
            width: 1280,
            height: 720,
            scale: 1.5, // 1280 * 1.5 = 1920px, 720 * 1.5 = 1080px
            backgroundColor: transparentBg ? null : '#090d16',
            useCORS: true,
            logging: false
        });

        const link = document.createElement('a');
        const suffix = transparentBg ? 'Nen-Trong-1920x1080' : 'FullHD-1920x1080';
        link.download = `BXH-Test-Dame-${suffix}-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();

        showToast(transparentBg ? '✅ Đã tải PNG nền trong suốt (1920×1080)!' : '✅ Đã tải ảnh PNG 16:9 (1920×1080)!');
    } catch (err) {
        console.error('Lỗi xuất ảnh:', err);
        showToast('❌ Có lỗi khi tạo ảnh PNG: ' + err.message);
    } finally {
        card.style.transform = prevTransform;
        card.style.borderRadius = prevRadius;
        card.classList.remove('transparent-bg');
        document.body.classList.remove('exporting');
    }
}

// =============================================================================
// 9. THEMES & TABS
// =============================================================================
function setTheme(themeName, btnEl) {
    appState.theme = themeName;
    document.body.setAttribute('data-theme', themeName);
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('bg-amber-500', 'bg-fuchsia-500', 'bg-sky-400', 'bg-rose-500', 'text-slate-950');
        btn.classList.add('text-slate-300', 'hover:bg-slate-800');
    });

    if (btnEl) {
        btnEl.classList.remove('text-slate-300', 'hover:bg-slate-800');
        btnEl.classList.add('text-slate-950');
        if (themeName === 'gold') btnEl.classList.add('bg-amber-500');
        if (themeName === 'cyberpunk') btnEl.classList.add('bg-fuchsia-500');
        if (themeName === 'esport') btnEl.classList.add('bg-sky-400');
        if (themeName === 'blood') btnEl.classList.add('bg-rose-500');
    }

    saveState();
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.nav-tab-btn').forEach(el => {
        el.classList.remove('active');
        el.classList.add('text-slate-300');
    });

    const targetContent = document.getElementById(`tab-content-${tabId}`);
    const targetBtn = document.getElementById(`nav-btn-${tabId}`);
    if (targetContent) targetContent.classList.remove('hidden');
    if (targetBtn) {
        targetBtn.classList.add('active');
        targetBtn.classList.remove('text-slate-300');
    }

    if (tabId === 'benchmark') {
        setTimeout(fitStage, 50);
    } else if (tabId === 'codex') {
        renderCodex();
    } else if (tabId === 'exclusive') {
        renderExclusiveSets();
    }
}

// Toast notification
function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = msg;
    toast.classList.remove('translate-y-[-160%]', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-[-160%]', 'opacity-0');
    }, 3200);
}

// Preset select dropdown in hero modal
function populatePresetSelect() {
    const sel = document.getElementById('hero-preset-select');
    if (!sel) return;

    sel.innerHTML = '<option value="">-- Chọn tướng từ Game Min (104 - 117) --</option>';
    [...GAME_HEROES_104_PLUS].sort((a, b) => b.id - a.id).forEach(h => {
        const opt = document.createElement('option');
        opt.value = h.id;
        opt.textContent = `[ID ${h.id}] ${h.name} (${h.star}★ - ${h.feature})`;
        sel.appendChild(opt);
    });

    sel.addEventListener('change', (e) => {
        const val = parseInt(e.target.value);
        if (val) selectPresetHero(val);
    });
}

// Reset data to defaults
function resetToDefaults() {
    if (currentRole !== 'admin') {
        showToast('⚠️ Cần quyền Admin để khôi phục mặc định!');
        return;
    }
    if (confirm('Bạn có chắc muốn đặt lại toàn bộ BXH về dữ liệu chuẩn test 60s ban đầu không?')) {
        localStorage.removeItem(STORAGE_KEY);
        appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState();
        renderBenchmark();
        showToast('Đã khôi phục dữ liệu ban đầu!');
    }
}

// JSON Export / Import
function exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `eldodict_benchmark_${Date.now()}.json`);
    dlAnchor.click();
    showToast('Đã xuất file JSON thành công!');
}

function importJSON() {
    if (currentRole !== 'admin') {
        showToast('⚠️ Cần quyền Admin để nhập file dữ liệu!');
        return;
    }
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = event => {
            try {
                const parsed = JSON.parse(event.target.result);
                if (parsed && Array.isArray(parsed.heroes)) {
                    appState = parsed;
                    saveState();
                    renderBenchmark();
                    showToast('Đã nhập dữ liệu JSON thành công!');
                } else {
                    alert('File JSON không đúng cấu trúc BXH El Dorado!');
                }
            } catch (err) {
                alert('Lỗi đọc file JSON: ' + err.message);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}
